const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const seconds = document.querySelector('#seconds')
const d = new Date();

//seconds
const curSeconds = d.getSeconds()
let secondsDeg = curSeconds*6
seconds.style.transform = `rotate(${secondsDeg}deg)`;

//Minutes
const curMinutes = d.getMinutes()
let minutesDeg = (curMinutes)*6 + (curSeconds*0.1)
minute.style.transform = `rotate(${minutesDeg}deg)`
//Hours
const curHours = d.getHours()
curHours > 12 ? curHours=-12 : curHours //chaning to 12 hour format
let hoursDeg = curHours*30 + (curSeconds+curMinutes*60)*(1/120)
hour.style.transform = `rotate(${hoursDeg}deg)`

setInterval(()=>{
    secondsDeg+=6
    seconds.style.transform = `rotate(${secondsDeg}deg)`
    minutesDeg+=0.1
    minute.style.transform = `rotate(${minutesDeg}deg)`
    hoursDeg+=(1/120)
    hour.style.transform = `rotate(${hoursDeg}deg)`;
},1000)

//Github icon
const icon = document.querySelector('.fa-github')
const profile = document.querySelector('#github>p')
icon.addEventListener('mouseenter', () => {
    profile.classList.toggle('profile-hide')
})
icon.addEventListener('mouseleave', () => {
    profile.classList.toggle('profile-hide')
})