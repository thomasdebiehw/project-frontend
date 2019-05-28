const IP = '169.254.10.1:5000';
//#region ***********  Callback - HTML Generation (After select) ***********
// show________
const showTemperature = function (jsonObject) {
    console.log(jsonObject);
    document.querySelector('#temperature').innerHTML= `De temperatuur is ${jsonObject.temperature} graden Celcius.`
  }
//#endregion
//#region ***********  Data Access ***********
// get_______
const getTemperature = function () {
    handleData(`http://${IP}/api/v1/sensors/temperature`, showTemperature);
}
//#endregion
//#region ***********  INIT / DOMContentLoaded ***********
const init = function () {
    domButton = document.querySelector('#button');
    domButton.addEventListener('click', function () {
        console.log('gedrukt')
        getTemperature();
    });
};

document.addEventListener('DOMContentLoaded', init);
//#endregion