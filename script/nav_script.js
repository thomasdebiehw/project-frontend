let domAlarm, domThermostat, domAlarmContent, domThermostatContent, domAlarmMobile, domThermostatMobile, domAlarmContentMobile, domThermostatContentMobile
const initnav = function () {
    domAlarm = document.getElementById('dropdown-alarm');
    domThermostat = document.getElementById('dropdown-thermostat');
    domAlarmContent = document.getElementById('content-alarm');
    domThermostatContent = document.getElementById('content-thermostat');
    domAlarmMobile = document.getElementById('dropdown-alarm-mobile');
    domThermostatMobile = document.getElementById('dropdown-thermostat-mobile');
    domAlarmContentMobile = document.getElementById('content-alarm-mobile');
    domThermostatContentMobile = document.getElementById('content-thermostat-mobile');
    domAlarm.addEventListener('click', function(){
        domThermostatContent.classList.remove('c-nav-dropdown-active');
        domAlarmContent.classList.toggle('c-nav-dropdown-active');
    })
    domThermostat.addEventListener('click', function(){
        domAlarmContent.classList.remove('c-nav-dropdown-active');
        domThermostatContent.classList.toggle('c-nav-dropdown-active');
    })
    domAlarmMobile.addEventListener('click', function(){
        domThermostatContentMobile.classList.remove('c-nav-dropdown-active');
        domAlarmContentMobile.classList.toggle('c-nav-dropdown-active');
    })
    domThermostatMobile.addEventListener('click', function(){
        domAlarmContentMobile.classList.remove('c-nav-dropdown-active');
        domThermostatContentMobile.classList.toggle('c-nav-dropdown-active');
    })
    toggleNav();

}
function toggleNav() {
    let toggleTrigger = document.querySelectorAll(".js-toggle-nav");
    for (let i = 0; i < toggleTrigger.length; i++) {
        toggleTrigger[i].addEventListener("click", function() {
            document.querySelector("body").classList.toggle("has-mobile-nav");
            document.getElementById('mobile-nav').classList.toggle("c-mobile-nav-disp");
            document.getElementById("def-menu").focus();
        })
    }
}

document.addEventListener('DOMContentLoaded', initnav);