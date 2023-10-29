import axios from "axios";

const API_KEY = process.env.API_KEY_WEATHER;

const geoCords = {
  lat: 49.4216,
  lon: 26.9965,
};

const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${geoCords.lat}&lon=${geoCords.lon}&appid=${API_KEY}&units=metric`;

async function getForecast() {
  try {
    const response = await axios.get(URL);
    return response.data.list;
  } catch (error) {
    console.error(error);
  }
}

export { getForecast };
