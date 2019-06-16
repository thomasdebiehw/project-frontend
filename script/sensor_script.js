const IP = '169.254.10.1:5000';
const socket = io.connect(IP);
let domSensors, domHeating, domWalkin, domWalkout
//#region ***********  Callback - HTML Generation (After select) or on socket event ***********
// show________
const showSensors = function(data){
    domSensors.innerHTML = '';
    sensorArr = []
    data.forEach(element => {
        domSensors.innerHTML +=`<p>Model: ${element[0]}`
        if (element[1] == true){
            domSensors.innerHTML+= `<div id="${element[0]}">Walk-in: Yes</div></p><br>`
        }
        else{
            domSensors.innerHTML+= `<div id="${element[0]}">Walk-in: No</div></p><br>`
        }
        sensorArr.push(element[0])
        
    });
    sensorArr.forEach(element=> {
        document.getElementById(element).addEventListener('click', function() {
            console.log("oi")
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
    domWalkin.innerHTML = `<p><form>Walk-in timeout: 
    <input type="number" name="timeout" min="1" max="100" step="1" id="walkin-val"> seconds 
    <input type="button" id="send-walkin" class="c-save-button" value="Save">
    </form></p>`;
    document.getElementById('send-walkin').addEventListener('click', function () {
        socket.emit('change-walkin', document.getElementById('walkin-val').value);
        domWalkin.innerHTML += ' Saved!';
    });
    domWalkout = document.getElementById('walkout');
    domWalkout.innerHTML = `<p><form>Walk-out timeout: 
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
    socket.on('alarm_timeouts', function(data){
        console.log(data)
        document.getElementById("walkin-val").value = data.walkin;
        document.getElementById("walkout-val").value = data.walkout;
    })
    socket.on('heating-linked', function(data){
        if (data == true){
            domHeating.innerHTML= 'Heating linked: Yes';
        }
        else {
            domHeating.innerHTML= 'Heating linked: No';
        }
        
    })
    domHeating.addEventListener('click', function(){
        socket.emit('toggle-heating-link');
    })
};


document.addEventListener('DOMContentLoaded', init);
//#endregion