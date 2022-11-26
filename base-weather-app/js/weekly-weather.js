import { getWeeklyWeather } from "./services/weather.js";
import { formatWeekList } from "./utils/format-data.js";
import { getLatLon } from "./geolocation.js";

function configWeeklyWeather() {}

export default async function weeklyWeather() {
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
}
