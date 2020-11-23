var second = 0, milisecond = 0, interval;
var seconds = document.getElementById('second');
var miliseconds = document.getElementById('milisecond');
var btnStart = document.getElementById('btnStart');
var btnPause = document.getElementById('btnPause');
var btnReset = document.getElementById('btnReset');

btnStart.onclick = function () {
    clearInterval(interval);
    interval = setInterval(starTime, 10);
}

function starTime() {
    console.log("start");
    milisecond++;
    if (milisecond <= 9) {
        miliseconds.innerHTML = `0${milisecond}`;
    }

    if (milisecond > 9) {
        miliseconds.innerHTML = milisecond;
    }

    if (milisecond > 99) {
        second++;
        milisecond = 0;
        miliseconds.innerHTML = `0${milisecond}`;
    }

    if (second < 9) {
        seconds.innerHTML = `0${second}`;
    }

    if (second > 9) {
        seconds.innerHTML = second;
    }

    if (second > 99) {
        second = 0;
        seconds.innerHTML = `0${second}`;
    }
}