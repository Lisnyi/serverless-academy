import * as fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "data.json");

async function getUsersData() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.log(e);
  }
}

function transformData(data) {
  const newData = [];

  data.map(({ user: { name, _id }, endDate, startDate }) => {
    const index = newData.findIndex(({ userId }) => userId === _id);

    if (index === -1) {
      const newMarkup = {
        userId: _id,
        userName: name,
        vacations: [
          {
            startDate,
            endDate,
          },
        ],
      };

      newData.push(newMarkup);
      return;
    }

    const vacationsMarkup = {
      startDate,
      endDate,
    };

    newData[index].vacations.push(vacationsMarkup);
  });

  return newData;
}

async function createNewFile(data, name = "new-data.json") {
  const newFilePath = path.join(__dirname, name);
  await fs.open(newFilePath, "w");
  await fs.appendFile(newFilePath, JSON.stringify(data, null, " "));
}

async function createNewData() {
  const data = await getUsersData();
  const newData = transformData(data);
  await createNewFile(newData);
}

createNewData();
