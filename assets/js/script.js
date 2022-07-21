const hours = document.getElementById('horas')
const minuts = document.getElementById('minutos')
const seconds = document.getElementById('segundos')


const relogio = setInterval(function time() {
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let s = dateToday.getSeconds()

    if(hr < 10) '0' + hr 
    
    if (min < 10) '0' + min
    
    if (s < 10) '0' + s            

    hours.textContent = hr
    minuts.textContent = min
    seconds.textContent = s
})