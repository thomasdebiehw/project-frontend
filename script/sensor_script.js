const IP = '169.254.10.1:5000';
const socket = io.connect(IP);
let domSensors, domHeating, domWalkin, domWalkout
//#region ***********  Callback - HTML Generation (After select) or on socket event ***********
// show________
const showSensors = function (data) {
    domSensors.innerHTML = '<table>';
    sensorArr = []
    data.forEach(element => {
        domSensors.innerHTML += `<tr><td><b>Model: </b>${element[0]}`
        if (element[1] == true) {
            domSensors.innerHTML += `<div id="${element[0]}"><b>Walk-in: <i class="fas fa-toggle-on"></b></i></div></p><br>`
        } else {
            domSensors.innerHTML += `<div id="${element[0]}"><b>Walk-in: <i class="fas fa-toggle-off"></i></b></div></p><br>`
        }
        sensorArr.push(element[0])
        domSensors.innerHTML += '</td></tr>'
    });
    domSensors.innerHTML += '</table>'
    sensorArr.forEach(element => {
        document.getElementById(element).addEventListener('click', function () {
            socket.emit("change-sensor-walkin", element);
        });
    });
};


//#endregion
//#region ***********  Data Access ***********
// get_______

//#endregion
//#region ***********  INIT / DOMContentLoaded ***********
const init = function () {
    console.log("loaded")
    socket.emit("sensor");
    domSensors = document.getElementById('sensors');
    domHeating = document.getElementById('heating');
    domWalkin = document.getElementById('walkin');
    domWalkin.innerHTML = `<p><form><b>Walk-in timeout: </b>
    <input type="number" name="timeout" min="1" max="100" step="1" id="walkin-val"> seconds 
    <input type="button" id="send-walkin" class="c-save-button" value="Save">
    </form></p>`;
    document.getElementById('send-walkin').addEventListener('click', function () {
        socket.emit('change-walkin', document.getElementById('walkin-val').value);
        domWalkin.innerHTML += ' Saved!';
    });
    domWalkout = document.getElementById('walkout');
    domWalkout.innerHTML = `<p><form><b>Walk-out timeout: </b>
    <input type="number" name="timeout" min="1" max="100" step="1" id="walkout-val"> seconds 
    <input type="button" id="send-walkout" class="c-save-button" value="Save">
    </form></p>`;
    document.getElementById('send-walkout').addEventListener('click', function () {
        socket.emit('change-walkout', document.getElementById('walkout-val').value);
        domWalkout.innerHTML += ' Saved!';
    });
    socket.on('sensor-list', function (data) {
        console.log(data)
        showSensors(data);
    });
    socket.on('alarm_timeouts', function (data) {
        console.log(data)
        document.getElementById("walkin-val").value = data.walkin;
        document.getElementById("walkout-val").value = data.walkout;
    })
    socket.on('heating-linked', function (data) {
        if (data == true) {
            domHeating.innerHTML = '<b>Heating linked: </b><i class="fas fa-toggle-on"></i>';
        } else {
            domHeating.innerHTML = '<b>Heating linked: </b><i class="fas fa-toggle-off"></i>';
        }

    })
    domHeating.addEventListener('click', function () {
        socket.emit('toggle-heating-link');
    })
};


document.addEventListener('DOMContentLoaded', init);
//#endregion