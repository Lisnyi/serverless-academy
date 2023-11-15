import * as fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";
import { httpError } from "../helpers/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbDirPath = path.join(__dirname, "../db");

const writeData = async (name, data) => {
  try {
    const newFilePath = path.join(dbDirPath, `${name}.json`);
    await fs.writeFile(newFilePath, JSON.stringify(data, null, " "));
  } catch (e) {
    throw httpError(400, `Something went wrong, try another path`);
  }
};

const readData = async (name) => {
  try {
    const filePath = path.join(dbDirPath, `${name}.json`);
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (e) {
    throw httpError(404, `Not found file with path ${name}`);
  }
};

export { writeData, readData };
