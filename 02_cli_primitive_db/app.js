#!/usr/bin/env node
import inquirer from "inquirer";
import {
  startQuestions,
  addUserQuestions,
  searchQuestions,
  findNameQuestions,
} from "./questions.js";
import { getUsers, addUser } from "./services.js";
import { findResult } from "./utils.js";

function startApp() {
  inquirer.prompt(startQuestions).then(async ({ name }) => {
    if (name === "") {
      inquirer.prompt(searchQuestions).then(async ({ search }) => {
        if (search) {
          const users = await getUsers();
          console.log(users);
          inquirer.prompt(findNameQuestions).then(async ({ find }) => {
            findResult(find);
          });
        }
      });
    }
    if (name !== "") {
      inquirer.prompt(addUserQuestions).then(async ({ gender, age }) => {
        let newUser = { name, gender };
        if (age) {
          newUser = { ...newUser, age };
        }
        await addUser(newUser);
        startApp();
      });
    }
  });
}

startApp();
