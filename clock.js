
const dataSecond = document.querySelector('[data-second]');
const dataMinute = document.querySelector('[data-minute]');
const dataHour = document.querySelector('[data-hour]');
let  i = 0;

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
  let colorArray = ["black", "blue", "brown", "green"];
  let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
document.getElementById('bg-color').style.backgroundColor = randomColor;
}

setInterval(function(){
    setClock(), changeColor()
}, 1000);
