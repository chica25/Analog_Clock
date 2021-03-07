setInterval(setClock, 1000)

const dataSecond = document.querySelector('[data-second]')
const dataMinute = document.querySelector('[data-minute]')
const dataHour = document.querySelector('[data-hour]')

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

setClock();


const colors = ["#e1b1of", "#e0cdd0", "#fb9ab6","#448a9a"];

let changeColor = function () {
    let newColorArr = Math.floor(Math.random(colors.length) * 10)
    let newColor = colors[newColorArr]
    document.body.style.backgroundColor = newColor
}

setInterval(changeColor, 1000)


