let domAlarm, domThermostat, domAlarmContent, domThermostatContent
const initnav = function () {
    domAlarm = document.getElementById('dropdown-alarm');
    domThermostat = document.getElementById('dropdown-thermostat');
    domAlarmContent = document.getElementById('content-alarm');
    domThermostatContent = document.getElementById('content-thermostat');
    domAlarm.addEventListener('click', function(){
        domThermostatContent.classList.remove('c-nav-dropdown-active');
        domAlarmContent.classList.toggle('c-nav-dropdown-active');
    })
    domThermostat.addEventListener('click', function(){
        domAlarmContent.classList.remove('c-nav-dropdown-active');
        domThermostatContent.classList.toggle('c-nav-dropdown-active');
    })
function toggleNav() {
    let toggleTrigger = document.querySelectorAll(".js-toggle-nav");
    for (let i = 0; i < toggleTrigger.length; i++) {
        toggleTrigger[i].addEventListener("click", function() {
            console.log("ei");
            document.querySelector("body").classList.toggle("has-mobile-nav");
            document.getElementById('nav').classList.toggle("c-mobile-nav");
        })
    }
}
}


document.addEventListener('DOMContentLoaded', initnav);