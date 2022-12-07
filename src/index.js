// const { default: axios } = require("axios");

'use strict';

axios;

let clicks = 32;

function changeColor() {
  let color = 'black';
  if (clicks <= 49) {
    color = 'teal';
  } else if (clicks <= 59) {
    color = 'green';
  } else if (clicks <= 69) {
    color = 'yellow';
  } else if (clicks <= 79) {
    color = 'orange';
  } else if (clicks > 79) {
    color = 'red';
  }
  document.getElementById('tempNumber').style.color = color;
  document.getElementById('tempHeader').style.color = color;
}

function clicksUpTemp() {
  clicks += 1;
  document.getElementById('tempNumber').innerHTML = clicks;
  changeColor();
  changeLandscape();
}

function clicksDownTemp() {
  clicks -= 1;
  document.getElementById('tempNumber').innerHTML = clicks;
  changeColor();
  changeLandscape();
}

function changeLandscape() {
  let landscape = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  if (clicks <= 59) {
    landscape = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else if (clicks <= 69) {
    landscape = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (clicks <= 79) {
    landscape = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (clicks > 79) {
    landscape = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  }
  document.getElementById('landscapeImage').innerHTML = landscape;
}

// const currentCity = document.getElementById('currentCity');
// const userInput = document.getElementById('cityName');
function changeCityName() {
  var x = document.getElementById('cityName').value;
  document.getElementById('currentCity').innerHTML = x;
}
