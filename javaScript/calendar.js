"use strict"

/*const lang = navigator.language;
let date = new Date(); // определение объекта с текущей датой и временем
let dayNumber = date.getDate(); // получение даты
let month = date.getMonth(); // получение месяца
let year = date.getFullYear(); // получение текущего года

document.getElementById('dayNumber').innerHTML= dayNumber;
document.getElementById('month').innerHTML = month;
document.getElementById('year').innerHTML = year;*/

/*let today = new Date();
document.getElementById('todayDate').innerHTML = today;*/

function formateDateToString(date) {
  let dd = (date.getDate() < 10 ? '0' : '') + date.getDate();

  let mm = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);

  return dd + "." + mm;
}

let a = new Date();
document.getElementById('todayDate').innerHTML = formateDateToString(a);
