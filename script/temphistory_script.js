//const IP = location.hostname + ':5000';
const IP = '192.168.0.128:5000';
let domMeasurements, domMeasurementsDesk
//#region ***********  Callback - HTML Generation (After select) or on socket event ***********
// show________

const showMeasurements = function (data) {
    console.log(data);
    html = `<table>`;
    htmldesk = '<table>'
    htmldesk = `<table><tr><th>Timestamp</th><th>Value</th></tr>`;


    data.forEach(element => {
        html += `<tr><td><b>${element.measurementdatetime}</b></td><td>
        <b>Value:</b> ${element.measuredvalue}°C<br>
        <br>
        </td></tr>`;
        htmldesk += `<tr><td>${element.measurementdatetime}</td><td>${element.measuredvalue}°C</td></tr>`;


    });
    html += `</table>`;
    domMeasurements.innerHTML = html;
    domMeasurementsDesk.innerHTML = htmldesk;
}

//#endregion
//#region ***********  Data Access ***********
// get_______
const getMeasurements = function () {
    handleData(`http://${IP}/api/v1/list/temperature`, showMeasurements);
}
//#endregion
//#region ***********  INIT / DOMContentLoaded ***********
const init = function () {
    console.log("loaded")
    domMeasurements = document.getElementById('measurements');
    domMeasurementsDesk = document.getElementById("measurements-desktop")
    getMeasurements();
};


document.addEventListener('DOMContentLoaded', init);
//#endregion