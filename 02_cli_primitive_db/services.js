import * as fs from "node:fs/promises";
import { normalizeName } from "./utils.js";

async function getUsers() {
  const users = await fs.readFile("db.txt", "utf-8");
  return users ? JSON.parse(users) : [];
}

async function addUser(user) {
  const users = await getUsers();
  users.push(user);
  await fs.writeFile("db.txt", JSON.stringify(users));
}

async function findUsers(name) {
  const users = await getUsers();
  const userName = normalizeName(name);
  const result = users.filter(({ name }) => name === userName);
  return result.length !== 0 ? result : false;
}

export { addUser, getUsers, findUsers };
