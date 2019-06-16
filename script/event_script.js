const IP = '169.254.10.1:5000';
const socket = io.connect(IP);
let domEvents
//#region ***********  Callback - HTML Generation (After select) or on socket event ***********
// show________

const showEvents = function(data) {
    console.log(data);
    elementArr = [];
    domEvents.innerHTML = `<p>`;
    data.forEach(element => {
        domEvents.innerHTML += `<div>Timestamp: ${element.eventdatetime}<br>Type: ${element.eventtype}<br>Component: ${element.componentname}<br>User: ${element.username}<br>`;
        domEvents.innerHTML+= `</div><br>`
        

    });
    
    domEvents.innerHTML += `</p>`;
    console.log(elementArr)
}

//#endregion
//#region ***********  Data Access ***********
// get_______
const getTemperature = function () {
    handleData(`http://${IP}/api/v1/sensors/temperature`, showTemperature);
}
const getEvents = function () {
    handleData(`http://${IP}/api/v1/list/events`, showEvents);
}
//#endregion
//#region ***********  INIT / DOMContentLoaded ***********
const init = function () {
    console.log("loaded")
    domEvents = document.getElementById('events');
    getEvents();
};


document.addEventListener('DOMContentLoaded', init);
//#endregion