const IP = '169.254.10.1:5000';
let domEvents
//#region ***********  Callback - HTML Generation (After select) or on socket event ***********
// show________
/*
const setEventAck = function(data){
    console.log('ack')
    socket.emit('acknowledge_event', data)

}
const showNewAlarmRaisedEvents = function(data) {
    console.log(data);
    elementArr = [];
    domAlarmRaisedEvents.innerHTML = `<p>`;
    data.forEach(element => {
        domAlarmRaisedEvents.innerHTML += `<div id="${element[0]}">${element[0]} ${element[1]} ${element[2]} ${element[3]} ${element[4]} ${element[5]}</div><br>`;
        elementArr.push(element[0])

    });
    console.log(elementArr);
    
    domAlarmRaisedEvents.innerHTML += `</p>`;
    elementArr.forEach(element => {
        document.getElementById(element).addEventListener('click', function(){
            setEventAck(element);
        });
    });
}*/

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
    console.log("loaded")
};


document.addEventListener('DOMContentLoaded', init);
//#endregion