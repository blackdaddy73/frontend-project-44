#!/usr/bin/env node
import welcome from '../../src/cli.js';
welcome();
import readlineSync from 'readline-sync';
const brainEven = () => {
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let NumberOfAnswers = 0
for (; NumberOfAnswers !== 3;) {
let randomNumber = Math.round(Math.random(1) * 99) + 1;
let isEven = true;
let correctAnswer = 'yes';
randomNumber % 2 === 0 ? isEven = true : isEven = false;
isEven === true ? correctAnswer = 'yes' : correctAnswer = 'no';
console.log('Question: ', randomNumber);
const answer = readlineSync.question('Your answer: ');
if (answer === correctAnswer) {
    console.log('Correct!');
    NumberOfAnswers += 1;
    }
    else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
        break;
    } 
    };
if (NumberOfAnswers === 3) {
    console.log(`Congratulations, ${name}`);
}
else console.log(`Game over ${name}`);
};
brainEven();
