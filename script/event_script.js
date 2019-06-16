const IP = '169.254.10.1:5000';
let domEvents, domEventsDesk
//#region ***********  Callback - HTML Generation (After select) or on socket event ***********
// show________

const showEvents = function (data) {
    console.log(data);
    html = `<table>`;
    htmldesk = '<table>'
    htmldesk = `<table><tr><th>Timestamp</th><th>Type</th><th>Component</th><th>User</th></tr>`;


    data.forEach(element => {
        html += `<tr><td><b>${element.eventdatetime}</b></td><td>
        <b>Event Type:</b> ${element.eventtype}<br>
        <b>Component:</b> ${element.componentname}<br>
        <b>User:</b> ${element.username}<br>
        <br>
        </td></tr>`;
        htmldesk += `<tr><td>${element.eventdatetime}</td><td>${element.eventtype}</td><td>${element.componentname}</td><td>${element.username}</td></tr>`;


    });
    html += `</table>`;
    domEvents.innerHTML = html;
    domEventsDesk.innerHTML = htmldesk;
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
    domEventsDesk = document.getElementById("events-desktop")
    getEvents();
};


document.addEventListener('DOMContentLoaded', init);
//#endregion