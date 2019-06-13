const IP = '169.254.10.1:5000';
const socket = io.connect(IP);
let domSensors
//#region ***********  Callback - HTML Generation (After select) or on socket event ***********
// show________



//#endregion
//#region ***********  Data Access ***********
// get_______

//#endregion
//#region ***********  INIT / DOMContentLoaded ***********
const init = function () {
    console.log("loaded")
};


document.addEventListener('DOMContentLoaded', init);
//#endregion