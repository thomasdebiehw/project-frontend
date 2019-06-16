const IP = '169.254.10.1:5000';
let domEvents
//#region ***********  Callback - HTML Generation (After select) or on socket event ***********
// show________

const showEvents = function(data) {
    console.log(data);
    html = '';
    html = `<table><tr><th>Timestamp</th><th>Type</th><th>Component</th><th>User</th></tr>`;

    data.forEach(element => {
        html += `<tr><td>${element.eventdatetime}</td><td>${element.eventtype}</td><td>${element.componentname}</td><td>${element.username}</td></tr>`;
        

    });
    html += `</table>`;
    domEvents.innerHTML = html
}

//#endregion
//#region ***********  Data Access ***********
// get_______
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