import TelegramBot from "node-telegram-bot-api";
import { forecastOptions, intervalsOptions } from "./options.js";
import {
  forecast,
  threeHoursInterval,
  sixHoursInterval,
} from "./buttonsText.js";
import { getForecast } from "./api.js";
import { forecastMessage } from "./utils.js";

const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, function onPhotoText(msg) {
  bot.sendMessage(msg.chat.id, "Show forecast?", forecastOptions);
});

bot.on("message", async (msg) => {
  if (msg.text === forecast) {
    bot.sendMessage(msg.chat.id, "Chose an interval", intervalsOptions);
  }

  if (msg.text === threeHoursInterval) {
    const forecast = await getForecast();
    bot.sendMessage(msg.chat.id, forecastMessage(forecast));
  }

  if (msg.text === sixHoursInterval) {
    const forecast = await getForecast();
    bot.sendMessage(msg.chat.id, forecastMessage(forecast, 6));
  }
});
