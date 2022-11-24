import { BASE_API, API_KEY } from "../constants.js";

export async function getCurrentWeather(lat, lon) {
  const response = await fetch(
    `${BASE_API}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  console.log("THIS IS THE RESPONSE");
  console.log(response);
  if (!response.ok)
    return {
      isError: true,
      data: null,
    };
  const data = await response.json();
  console.log("data converted");
  console.log(data);
  return {
    isError: false,
    data,
  };
}
