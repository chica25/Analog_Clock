setInterval(setClock, 1000)

const hour = document.querySelector('[data-hour]')
const minute = document.querySelector('[data-minute]')
const second = document.querySelector('[data-second]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentData.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentData.getHours()) / 12
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--roation', rotationRatio * 360)
}