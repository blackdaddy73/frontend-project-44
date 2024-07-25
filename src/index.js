#!/usr/bin/env node
import welcome from './cli.js';
import readlineSync from 'readline-sync';
const name = welcome();
import brainEven from '../bin/games/brain-even.js';
for (let NumberOfAnswers = 0; NumberOfAnswers !== 3;) {
    let correctAnswer = brainEven();
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
