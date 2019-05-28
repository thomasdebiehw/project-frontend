//#region ***********  INIT / DOMContentLoaded ***********
const init = function () {
    domButton = document.querySelector('#button');
    domButton.addEventListener('click', function () {
        console.log('gedrukt')
      });
  };
  
  document.addEventListener('DOMContentLoaded', init);
  //#endregion