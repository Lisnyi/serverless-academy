import TelegramBot from "node-telegram-bot-api";

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.CHAT_ID;

const bot = new TelegramBot(token, { polling: true });

async function sendMessage(message) {
  try {
    await bot.sendMessage(chatId, message);
  } catch (e) {
    console.log(e);
  }
}

async function sendPhoto(path) {
  try {
    await bot.sendPhoto(chatId, path);
    console.log('You have successfully sent your photo')
  } catch (e) {
    console.log(e);
  }
}

export { sendMessage, sendPhoto };
