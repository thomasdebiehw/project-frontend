const IP = '169.254.10.1:5000';
const socket = io.connect(IP);
let domAlarmStatus, domHeatingStatus, domCurrentTemp, domSetTemp
//#region ***********  Callback - HTML Generation (After select) ***********
// show________
const showTemperature = function (jsonObject) {
    console.log(jsonObject);
    document.querySelector('#temperature').innerHTML= `De temperatuur is ${jsonObject.temperature} graden Celcius.`
  }
  const showComponents = function (jsonObject) {
    console.log(jsonObject);
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
    domAlarmStatus = document.getElementById("alarm-status");
    domHeatingStatus = document.getElementById("heating-status")
    domCurrentTemp = document.getElementById("current-temperature");
    domSetTemp = document.getElementById("set-temperature");
    socket.on("index_emit", function(data) {
        console.log(data)
        domHeatingStatus.innerHTML = data.heating_status;
        domAlarmStatus.innerHTML = data.alarm_status;
        domCurrentTemp.innerHTML = data.current_temperature;
        domSetTemp.innerHTML = data.set_temperature;

    });
};


document.addEventListener('DOMContentLoaded', init);
//#endregion