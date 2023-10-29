import { Command } from "commander";
import { sendMessage, sendPhoto } from "./telegram-services.js";

process.env["NTBA_FIX_350"] = 1;

const program = new Command();

program
  .name("telegram-console-sender")
  .description("CLI to send messages and photo to Telegram Bot")
  .version("1.0.0");

program
  .command("send-message")
  .aliases(["m", "message"])
  .description("Send message to Telegram Bot")
  .argument("<message>", "message to send")
  .action(async (message) => {
    await sendMessage(message);
    process.exit(0);
  });

program
  .command("send-photo")
  .aliases(["p", "photo"])
  .description(
    "Send photo to Telegram Bot. Just drag and drop it to console after command"
  )
  .argument("<path>", "path to photo")
  .action(async (path) => {
    await sendPhoto(path);
    process.exit(0);
  });

program.parse(process.argv);
