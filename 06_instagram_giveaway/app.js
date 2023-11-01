import * as fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const usersDirPath = path.join(__dirname, "users");

async function getUsersList(fileName) {
  try {
    const filePath = path.join(usersDirPath, fileName);
    const users = await fs.readFile(filePath, "utf-8");
    return users.split("\n");
  } catch (e) {
    console.log(e);
  }
}

async function getUsersObject(type) {
  const allUsers = {};
  const filesNames = await fs.readdir(usersDirPath);
  switch (type) {
    case "uniq":
      await Promise.all(
        filesNames.map(async (fileName) => {
          const usersList = await getUsersList(fileName);
          const uniqUsers = [...new Set(usersList)];
          for (const user of uniqUsers) {
            allUsers[user] = allUsers[user] ? allUsers[user] + 1 : 1;
          }
        })
      );
      break;
    default:
      await Promise.all(
        filesNames.map(async (fileName) => {
          const usersList = await getUsersList(fileName);
          for (const user of usersList) {
            allUsers[user] = allUsers[user] ? allUsers[user] + 1 : 1;
          }
        })
      );
  }
  return allUsers;
}

async function uniqueValues() {
  try {
    const users = await getUsersObject();
    return Object.keys(users).length;
  } catch (e) {
    console.log(e);
  }
}

async function existInAllFiles() {
  try {
    const users = await getUsersObject("uniq");
    const usersExistInAllFiles = Object.values(users).filter(
      (user) => user === 20
    );
    return usersExistInAllFiles.length;
  } catch (e) {
    console.log(e);
  }
}

async function existInAtleastTen() {
  try {
    const users = await getUsersObject("uniq");
    const usersExistInAtleastTen = Object.values(users).filter(
      (user) => user >= 10
    );
    return usersExistInAtleastTen.length;
  } catch (e) {
    console.log(e);
  }
}

async function getResults() {
  try {
    console.time("Time");
    const uniqueUsers = await uniqueValues();
    console.log(`Unique usernames ${uniqueUsers}`);
    const usersExistInAllFiles = await existInAllFiles();
    console.log(`Exist in all files ${usersExistInAllFiles}`);
    const usersExistInAtleastTen = await existInAtleastTen();
    console.log(`Exist in atleast ten ${usersExistInAtleastTen}`);
    console.timeEnd("Time");
  } catch (e) {
    console.log(e);
  }
}

getResults();
