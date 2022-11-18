import weather from "../data/current-weather.js";

function setCurrentCity($el, city) {
  $el.textContent = city;
}

function configCurrentWeather(weather) {
  // loader
  // date
  // city
  const $currentWeatherCity = document.querySelector("#current-weather-city");
  const city = weather.name;
  setCurrentCity($currentWeatherCity, city);
  // temperature
  // background
}

export default function currentWeather() {
  configCurrentWeather(weather);
  console.log(weather);
}
