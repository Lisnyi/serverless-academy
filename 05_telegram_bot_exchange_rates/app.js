import TelegramBot from "node-telegram-bot-api";
import {
  startOptions,
  forecastOptions,
  exchangeRateOptions,
} from "./options.js";
import {
  forecast,
  exchangeRate,
  threeHoursInterval,
  sixHoursInterval,
  prevMenu,
  euro,
  dollar,
} from "./buttonsText.js";
import { getForecast, getDollarRate, getEuroRate } from "./api/index.js";
import { forecastMessage, exchangeRateMessage } from "./utils.js";

const token = "6806509699:AAG1I7OuEct3MzFgozK9VTS1CE3S5z0zdAQ";

const bot = new TelegramBot(token, { polling: true });

function onStart(msg) {
  bot.sendMessage(msg.chat.id, "Show forecast or exchange rate?", startOptions);
}

function sendForecastMessage(msg) {
  bot.sendMessage(msg.chat.id, "Chose an interval", forecastOptions);
}

function sendMessageExchangeRate(msg) {
  bot.sendMessage(msg.chat.id, "Choose a currency", exchangeRateOptions);
}

async function sendThreeHoursIntervalForecast(msg) {
  const forecast = await getForecast();
  bot.sendMessage(msg.chat.id, forecastMessage(forecast));
}

async function sendSixHoursIntervalForecast(msg) {
  const forecast = await getForecast();
  bot.sendMessage(msg.chat.id, forecastMessage(forecast, 6));
}

async function sendDollarExchangeRate(msg) {
  const rate = await getDollarRate()
  bot.sendMessage(msg.chat.id, exchangeRateMessage("USD", rate));
}

async function sendEuroExchangeRate(msg) {
  const rate = await getEuroRate()
  bot.sendMessage(msg.chat.id, exchangeRateMessage("EUR", rate));
}

bot.onText(/\/start/, onStart);

bot.on("message", async (msg) => {
  if (msg.text === forecast) {
    sendForecastMessage(msg);
  }

  if (msg.text === exchangeRate) {
    sendMessageExchangeRate(msg);
  }

  if (msg.text === prevMenu) {
    onStart(msg);
  }

  if (msg.text === threeHoursInterval) {
    sendThreeHoursIntervalForecast(msg);
  }

  if (msg.text === sixHoursInterval) {
    sendSixHoursIntervalForecast(msg);
  }

  if (msg.text === dollar) {
    sendDollarExchangeRate(msg);
  }

  if (msg.text === euro) {
    sendEuroExchangeRate(msg);
  }
});
