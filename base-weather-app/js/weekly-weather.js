import { getWeeklyWeather } from "./services/weather.js";
import { formatWeekList } from "./utils/format-data.js";
import { getLatLon } from "./geolocation.js";
import { createDOM } from "./utils/dom.js";
import { createPeriodTime } from "./period-time.js";
import dragabble from "./draggable.js";

function tabPanelTemplate(id) {
  return `
    <div class="tabPanel" tabindex="0" aria-labelledby="tab-${id}">
        <div class="dayWeather" id="dayWeather-${id}">
        <ul class="dayWeather-list" id="dayWeather-list-${id}">
        </ul>
        </div>
    </div>
  `;
}

function createTabPanel(id) {
  const $panel = createDOM(tabPanelTemplate(id));
  if (id > 0) {
    $panel.hidden = true;
  }
  return $panel;
}

function configWeeklyWeather(weekList) {
  const $container = document.querySelector(".tabs");
  weekList.forEach((day, index) => {
    const $panel = createTabPanel(index);
    $container.append($panel);
    day.forEach((weather, indexWeather) => {
      $panel
        .querySelector(".dayWeather-list")
        .append(createPeriodTime(weather));
    });
  });
}

// The forecast prediction
export default async function weeklyWeather() {
  const $container = document.querySelector(".weeklyWeather");
  const { lat, lon, isError } = await getLatLon();
  if (isError) return console.log("A ocurrido un error ubicandote");
  const { isError: weeklyWeatherError, data: weather } = await getWeeklyWeather(
    lat,
    lon
  );
  if (weeklyWeatherError)
    return console.log(
      "Oh! A ocurrido un error obteniendo el pronóstico del clima!"
    );
  const weekList = formatWeekList(weather.list);
  configWeeklyWeather(weekList);
  dragabble($container);
}
