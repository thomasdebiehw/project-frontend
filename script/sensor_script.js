const IP = '169.254.10.1:5000';
const socket = io.connect(IP);
let domSensors, domHeating, domWalkin, domWalkout
//#region ***********  Callback - HTML Generation (After select) or on socket event ***********
// show________



//#endregion
//#region ***********  Data Access ***********
// get_______

//#endregion
//#region ***********  INIT / DOMContentLoaded ***********
const init = function () {
    console.log("loaded")
    domSensors = document.getElementById('sensors');
    domHeating = document.getElementById('heating');
    domWalkin = document.getElementById('walkin');
    domWalkin.innerHTML = `<p><form>Walk-in timeout: 
    <input type="number" name="timeout" min="1" max="100" step="1" id="walkin-val" value="5"> seconds 
    <input type="button" id="send-walkin" value="Save">
    </form></p>`;
    document.getElementById('send-walkin').addEventListener('click', function () {
        socket.emit('change-walkin', document.getElementById('walkin-val').value);
        domWalkin.innerHTML += ' Saved!';
    });
    domWalkout = document.getElementById('walkout');
    domWalkout.innerHTML = `<p><form>Walk-out timeout: 
    <input type="number" name="timeout" min="1" max="100" step="1" id="walkout-val" value="5"> seconds 
    <input type="button" id="send-walkout" value="Save">
    </form></p>`;
    document.getElementById('send-walkout').addEventListener('click', function () {
        socket.emit('change-walkout', document.getElementById('walkout-val').value);
        domWalkout.innerHTML += ' Saved!';
    });
};


document.addEventListener('DOMContentLoaded', init);
//#endregion