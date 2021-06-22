const newDate = document.createElement("H1");
const dateInput = document.querySelector(".input-date");

const countdown = () => {
    const countDate = new Date(dateInput.value).getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    
    const H1Content = document.createTextNode(dateInput.value);

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor(gap % day / hour);
    const textMinute = Math.floor(gap % hour / minute);
    const textSecond = Math.floor(gap % minute / second);

    newDate.appendChild(H1Content);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
    document.querySelector('.date').innerText = new Date(countDate);
    console.log(gap);
};

setInterval(countdown, 1000);