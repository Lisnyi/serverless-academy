import { WRONG_OPTION } from "./config.js";

function getNumbers(list) {
  return list.map((item) => Number(item)).filter((value) => !isNaN(value));
}

function getWords(list) {
  return list.filter((value) => isNaN(Number(value)));
}

function getSortedList(list, option) {
  const numbers = getNumbers(list);
  const words = getWords(list);

  switch (option) {
    case '1':
      return words.sort((a, b) => a.localeCompare(b));
    case '2':
      return numbers.sort((a, b) => a - b);
    case '3':
      return numbers.sort((a, b) => b - a);
    case '4':
      return words.sort((a, b) => a.length - b.length)
    case '5':
      return [... new Set(words)]
    case '6':
		return [... new Set(list)]
    default:
      console.log(WRONG_OPTION)
  }
}
export { getNumbers, getWords, getSortedList };
