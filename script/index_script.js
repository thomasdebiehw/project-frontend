const IP = '169.254.10.1:5000';
const socket = io.connect(IP);
let domAlarmStatus, domHeatingStatus, domCurrentTemp, domSetTemp, domSetTempDisp
//#region ***********  Callback - HTML Generation (After select) or on socket event ***********
// show________
const showIndexData = function (data) {
    console.log(data)
    domHeatingStatus.innerHTML = data.heating_status;
    domAlarmStatus.innerHTML = data.alarm_status;
    domCurrentTemp.innerHTML = data.current_temperature;
    domSetTemp.innerHTML = data.set_temperature;
  }
  showSetTempDisplay = function (){
      domSetTempDisp.innerHTML = `<p><form>
      <input type="number" name="temperature" min="1" max="100" step="0.5" id="temp-val">
      <input type="button" id="send-temp" value="Set temperature">
      </form></p>`;
      document.getElementById('send-temp').addEventListener('click', function(){
          socket.emit('change-temp', document.getElementById('temp-val').value);
          domSetTempDisp.innerHTML = '';
      });

  }
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
    domAlarmStatus = document.getElementById('alarm-status');
    domHeatingStatus = document.getElementById('heating-status');
    domCurrentTemp = document.getElementById('current-temperature');
    domSetTemp = document.getElementById('set-temperature');
    domSetTempDisp = document.getElementById('change-temperature');
    domAlarmStatus.addEventListener('click', function(){
        socket.emit('toggle_alarm');
    })
    domSetTemp.addEventListener('click', function(){
        showSetTempDisplay()
    });
    socket.on('index_emit', function(data) {
        showIndexData(data);

    });
};


document.addEventListener('DOMContentLoaded', init);
//#endregion