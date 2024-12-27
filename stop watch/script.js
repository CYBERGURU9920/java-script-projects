const time = document.getElementById("time");

let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId = null;

function padstart(value){
    return String(value).padStart(2, "0");
}
let c=1;
function x(){
    if(c==1)
    {
        c=0;
        intervalId = setInterval(updateTime, 1000);
    }
}
function y(){
    c=1;
    clearInterval(intervalId);
    time.innerHTML = "00:00:00";
    seconds=0;
    minutes=0;
    hours=0;
    intervalId=null;
}
function z(){
    clearInterval(intervalId);
    c=1;

}
function updateTime() {
    
    time.innerHTML = seconds;
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
    }
    if(minutes == 60){
        minutes = 0;
        hours++;
    }
    time.innerHTML = `${padstart(hours)}:${padstart(minutes)}:${padstart(seconds)}`;

}
// updateTime();
