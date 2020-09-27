const daysVal = document.getElementById('daysVal');
const hoursVal = document.getElementById('hoursVal');
const minsVal = document.getElementById('minsVal');
const secsVal = document.getElementById('secsVal');

const dateToCompare = new Date('Dec 25 2020 00:00:00'); //Christmas. You can put another date xD

function countdown(){
  const newDateToCompare = new Date(dateToCompare);

  const atualDate = new Date();
  const diff = Math.abs(newDateToCompare - atualDate);
  
  var day, hour, minute, seconds, month;
  seconds = Math.floor(diff / 1000);
  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);

  daysVal.innerHTML = day < 10 ? "0" + day : day;
  hoursVal.innerHTML = (hour % 24) < 10 ? "0" + (hour % 24) : (hour % 24);
  minsVal.innerHTML = minute < 10 ? "0" + minute : minute;
  secsVal.innerHTML = seconds < 10 ? "0" + seconds : seconds;
}

countdown();

setInterval(countdown, 1000)

