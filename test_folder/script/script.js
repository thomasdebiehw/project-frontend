const IP = '169.254.10.1:5000';
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
    domButton = document.querySelector('#button');
    domButton.addEventListener('click', function () {
        console.log('gedrukt')
        getTemperature();
    });
    domButtonC = document.querySelector('#buttoncomponents');
    domButtonC.addEventListener('click', function () {
        console.log('gedrukt op components')
        getComponents();
    });
};

document.addEventListener('DOMContentLoaded', init);
//#endregion