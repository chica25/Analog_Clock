
const dataSecond = document.querySelector('[data-second]');
const dataMinute = document.querySelector('[data-minute]');
const dataHour = document.querySelector('[data-hour]');
let colorArray = ["#71b8bd", "#6ebcbe", "#6cc1be", "#6bc5be", "#6ac9bd", "#6bcdbb", "#6dd1b9", "#71d5b6", "#75d8b2", "#7bdcae", "#82dfa9", "#8ae2a4", "#93e59f", "#9de899", "#a7ea93", "#b2ed8d", "#beef87", "#caf082", "#d6f27c", "#e3f377"]

function setClock() {
    let currentDate = new Date()
    let secondsRatio = currentDate.getSeconds() / 60;
    let minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    let hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(dataSecond, secondsRatio)
    setRotation(dataMinute, minutesRatio)
    setRotation(dataHour, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

function changeColor() {
  let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    document.getElementById('bg-color').style.backgroundColor = randomColor;
}

setInterval(function(){
    setClock(), changeColor()
}, 1000);
