import { findUsers } from "./services.js";

function normalizeName(name) {
  return (
    name.trim().charAt(0).toUpperCase() + name.trim().toLowerCase().slice(1)
  );
}

async function findResult(name) {
  const findedUsers = await findUsers(name);
  if (!findedUsers) {
    return console.log(`User ${name} wasn't found.`);
  }
  console.log(`User ${name} was found.`);
  console.log(findedUsers);
  return;
}

export { normalizeName, findResult };
