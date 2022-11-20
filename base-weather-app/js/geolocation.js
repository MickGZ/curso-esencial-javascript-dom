function getlocationSupport() {
  // if ('geolocation' in navigator) {
  //   return true
  // }
  // return false
  return "geolocation" in navigator;
}

const defaultOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 1000000,
};

// This functions returns a promise
export function getCurrentPosition(options = defaultOptions) {
  if (!getlocationSupport())
    throw new Error("No hay soporte de geolocalización en tu navegador");

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        resolve(position);
      },
      () => {
        reject("No  hemos podido obtener tu ubicación");
      },
      options
    );
  });
}

export async function getLatLon(options = defaultOptions) {
  try {
    // Destructuring the object and then rename the inner atributes of the object
    const {
      coords: { latitude: lat, longitude: lon },
    } = await getCurrentPosition(options);
    return { lat, lon, isError: false };
  } catch (error) {
    return { isError: true, lat: null, lon: null };
  }
}
