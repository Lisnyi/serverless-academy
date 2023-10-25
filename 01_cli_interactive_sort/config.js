const MAX_WORDS = 10
const NUMBER_OF_OPTIONS = 6
const GREETING = `Hello. Enter ${MAX_WORDS} words or digits dividing them is spaces: `
const GOODBYE = 'Goodbye!'
const WRONG_OPTION= 'Wrongly selected option'
const SORT_OPTIONS = `1. Sort words alphabetically.
2. Show numbers from lesser to greater.
3. Show numbers from bigger to smaller.
4. Display words in ascending order by number of letters in the word.
5. Show only unique words.
6. Display only unique values from the set of words and numbers entered by the user.`
const EMPTY_LIST = 'There are no words or numbers in the list that match the specified filter'

const SORT_MESSAGE = `How would you like to sort values:
${SORT_OPTIONS}
Select (1-${NUMBER_OF_OPTIONS}) to sort or enter "exit" to exit from program and PRESS ENTER: `

export { MAX_WORDS, NUMBER_OF_OPTIONS, GREETING, SORT_OPTIONS, SORT_MESSAGE, EMPTY_LIST, GOODBYE, WRONG_OPTION }