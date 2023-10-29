import {
  forecast,
  threeHoursInterval,
  sixHoursInterval,
  exchangeRate,
  prevMenu,
  dollar,
  euro
} from "./buttonsText.js";

const startOptions = {
  background: true,
  reply_markup: JSON.stringify({
    keyboard: [[forecast], [exchangeRate]],
  }),
};

const forecastOptions = {
  reply_markup: JSON.stringify({
    keyboard: [[threeHoursInterval, sixHoursInterval], [prevMenu]],
  }),
};

const exchangeRateOptions = {
  reply_markup: JSON.stringify({
    keyboard: [[dollar, euro], [prevMenu]],
  }),
};

export { startOptions, forecastOptions, exchangeRateOptions };
