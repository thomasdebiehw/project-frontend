const IP = '169.254.10.1:5000';
const socket = io.connect(IP);
let domCurrentTemp, domSetTemp, domSetTempSlider, boolTempReceived
//#region ***********  Callback - HTML Generation (After select) or on socket event ***********
// show________
const showIndexData = function (data) {
    domCurrentTemp.innerHTML = data.current_temperature + ' °C';
    if (boolTempReceived == false){
        boolTempReceived = true;
    domSetTemp.innerHTML = data.set_temperature + '°C';
    domSetTempSlider.value = data.set_temperature;
    }
};
const showSetTempDisplay = function () {
    domSetTempDisp.innerHTML = `<p><form>
      <input type="number" name="temperature" min="1" max="100" step="0.5" id="temp-val">
      <input type="button" id="send-temp" class="c-save-button" value="Set temperature">
      </form></p>`;
    document.getElementById('send-temp').addEventListener('click', function () {
        socket.emit('change-temp', document.getElementById('temp-val').value);
        domSetTempDisp.innerHTML = '';
    });
};


//#endregion
//#region ***********  Data Access ***********
// get_______
const getTemperature = function () {
    handleData(`http://${IP}/api/v1/sensors/temperature`, showTemperature);
}
const getComponents = function () {
    handleData(`http://${IP}/api/v1/components`, showComponents);
}
//#endregion
//#region ***********  INIT / DOMContentLoaded ***********
const init = function () {
    boolTempReceived = false;
    domCurrentTemp = document.getElementById('current-temp');
    domSetTemp = document.getElementById('set-temp');
    domSetTempSlider = document.getElementById('set-temperature-slider');
    socket.on('index_emit', function (data) {
        showIndexData(data);
    });
    domSetTempSlider.oninput = function(){
        domSetTemp.innerHTML = this.value + '°C';
    };
};


document.addEventListener('DOMContentLoaded', init);
//#endregion