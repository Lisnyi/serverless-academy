#!/usr/bin/env node
import * as readline from 'node:readline';
import {
    stdin as input,
    stdout as output,
} from 'node:process';
import { GREETING, SORT_MESSAGE, GOODBYE, EMPTY_LIST } from './config.js'
import { getSortedList } from './utils.js';

const rl = readline.createInterface({ input, output });

function startApp () {
    rl.question(GREETING, (answer1) => {
        rl.question(SORT_MESSAGE, (answer2) => {
            if (answer2 === 'exit') {
                console.log(GOODBYE)
                rl.close()
                return
            }
            const list = answer1.trim().split(' ')
            const sortedList = getSortedList(list, answer2)
            if (sortedList.length === 0) {
                console.log(EMPTY_LIST)
                return startApp()
            }
            console.log(sortedList)
            return startApp()
        });
    });
}

startApp()