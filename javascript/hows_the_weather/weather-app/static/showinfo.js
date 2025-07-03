"use strict";

const firstLetterToUpperCase = function (city) {
  const firstLetter = city.charAt(0).toUpperCase();
  const otherLetters = city.slice(1);
  const newCity = firstLetter + otherLetters;
  return newCity;
};
console.log(weather_data);
let city = document.getElementById("city");
let current = document.getElementById("current");
let feels_like = document.getElementById("feels-like");
let max = document.getElementById("max");
let min = document.getElementById("min");
let weather = document.getElementById("weather");

city.innerText = `${firstLetterToUpperCase(weather_data["data"]["city-name"])}`;
weather.innerText = `${weather_data["data"]["weather"]}`;
current.innerText = `${weather_data["data"]["current_temp"]}°F`;
feels_like.innerText = `${weather_data["data"]["feels_like"]}°F`;
max.innerText = `${weather_data["data"]["max_temp"]}°f`;
min.innerText = `${weather_data["data"]["min_temp"]}°F`;
