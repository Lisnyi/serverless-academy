import * as fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbDirPath = path.join(__dirname, "./IP2LOCATION.CSV");

const getDb = async () => {
  const data = await fs.readFile(dbDirPath, "utf-8");
  return data.split("\r\n");
};

export { getDb };
