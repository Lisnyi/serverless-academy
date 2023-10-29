import {
  forecast,
  threeHoursInterval,
  sixHoursInterval,
} from "./buttonsText.js";

const forecastOptions = {
  reply_markup: JSON.stringify({
    keyboard: [[forecast]],
  }),
};

const intervalsOptions = {
  reply_markup: JSON.stringify({
    keyboard: [[threeHoursInterval], [sixHoursInterval]],
  }),
};

export { forecastOptions, intervalsOptions };
