import {
  NAME_MESSAGE,
  GENDER_MESSAGE,
  AGE_MESSAGE,
  SEARCH_QUESTION,
  FIND_MESSAGE,
} from "./config.js";
import { normalizeName } from "./utils.js";

const nameRegex = /^[a-zA-Z]+$/;

const startQuestions = [
  {
    type: "input",
    name: "name",
    message: NAME_MESSAGE,
    validate(value) {
      const pass = value.match(nameRegex);
      if (pass || value === "") {
        return true;
      }

      return "Please enter a valid name";
    },
    filter(val) {
      return normalizeName(val);
    },
  },
];

const addUserQuestions = [
  {
    type: "list",
    name: "gender",
    message: GENDER_MESSAGE,
    choices: ["male", "female"],
  },
  {
    type: "input",
    name: "age",
    message: AGE_MESSAGE,
    validate(value) {
      const valid = !isNaN(Number(value));
      return valid || "Please enter a number";
    },
    filter(val) {
      return val.trim();
    },
  },
];

const searchQuestions = [
  {
    type: "confirm",
    name: "search",
    message: SEARCH_QUESTION,
  },
];

const findNameQuestions = [
  {
    type: "input",
    name: "find",
    message: FIND_MESSAGE,
    validate(value) {
      const pass = value.match(nameRegex);
      if (pass) {
        return true;
      }

      return "Please enter a valid name";
    },
    filter(val) {
      return normalizeName(val);
    },
  },
];

export { startQuestions, addUserQuestions, searchQuestions, findNameQuestions };
