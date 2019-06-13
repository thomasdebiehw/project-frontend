const IP = '169.254.10.1:5000';
const socket = io.connect(IP);
let domEvents
//#region ***********  Callback - HTML Generation (After select) or on socket event ***********
// show________

const setEventAck = function(data){
    console.log('ack')
    socket.emit('acknowledge_event', data)
    getEvents();

}
const showEvents = function(data) {
    console.log(data);
    elementArr = [];
    domEvents.innerHTML = `<p>`;
    data.forEach(element => {
        domEvents.innerHTML += `<div>Event ID: ${element.idevent}<br>Timestamp: ${element.eventdatetime}<br>Type: ${element.eventtype}<br>Component: ${element.componentname}<br>User: ${element.username}<br>`;
        if (element.acknowledged != 1){
            domEvents.innerHTML+= `<button type="button" id="${element.idevent}">Mark as read</button></div><br><br>`
            elementArr.push(element.idevent)
        }
        else{
            domEvents.innerHTML+= `</div><br>`
        }
        

    });
    
    domEvents.innerHTML += `</p>`;
    console.log(elementArr)
    elementArr.forEach(element => {
        document.getElementById(element).addEventListener('click', function(){
            setEventAck(element);
            console.log(element)
        });
    });
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