const hourEl = document.getElementById("hour");
const minEl = document.getElementById("minute");
const secEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
const dateEl = document.getElementById("date");

function updateClock(){

let hr = new Date().getHours();
let min = new Date().getMinutes();
let sec = new Date().getSeconds();
let ampm = "AM";
let date = new Date().getDate();
let mon = new Date().toLocaleString("en-US", { month: "long" });
let year = new Date().getFullYear();

if(hr >= 12)
{
    hr = hr - 12;
    ampm = "PM";
}

hr = hr > 10 ? hr : "0" + hr; 
min = min > 10 ? min : "0" + min; 
sec = sec > 10 ? sec : "0" + sec; 
date = date > 10 ? date : "0" + date;

hourEl.innerText = hr;
minEl.innerText = min;
secEl.innerText = sec;
ampmEl.innerText = ampm;
dateEl.innerText = date + "-" + mon + "-" + year;

setTimeout(
    ()=>{
        updateClock()
    }, 1000
);

}

updateClock();