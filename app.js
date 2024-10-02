let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.getElementById('display');
let lapTimesRef = document.getElementById('lapTimes');
let int = null;

document.getElementById('startStopBtn').addEventListener('click', () => {
    if (int !== null) {
        clearInterval(int);
        int = null;
        document.getElementById('startStopBtn').innerText = 'Start';
    } else {
        int = setInterval(displayTimer, 10);
        document.getElementById('startStopBtn').innerText = 'Pause';
    }
});

let count=0;
document.getElementById('lapBtn').addEventListener('click', () => {
    
    if (int !== null) {
        recordLap();
    }
    else{
        if(count < 1){
            recordLap();
            count+=1;
        }
    }
});

document.getElementById('resetBtn').addEventListener('click', () => {
    clearInterval(int);
    int = null;
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timerRef.innerHTML = '00:00:00:00';
    document.getElementById('startStopBtn').innerText = 'Start';
    lapTimesRef.innerHTML = '';
});

function displayTimer() {
    milliseconds += 10;
    
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    let ms = milliseconds < 100 ? '0' + milliseconds : milliseconds;

    timerRef.innerHTML = `${h}:${m}:${s}:${ms}`;
}

function recordLap() {
    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    let ms = milliseconds < 100 ? '0' + milliseconds : milliseconds;

    
    let lapTime = document.createElement('li');
    lapTime.innerText = `Lap: ${h}:${m}:${s}:${ms}`;
    
    
    lapTimesRef.appendChild(lapTime);
}
