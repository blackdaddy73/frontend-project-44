#!/usr/bin/env node
import welcome from './cli.js';
import readlineSync from 'readline-sync';
const name = welcome();
import brainEven from '../bin/games/brain-even.js';
import brainCalc from '../bin/games/brain-calc.js';
import brainGCD from '../bin/games/brain-gcd.js';
//import gameSelection from '../utilities/game-selection.js';
let selection = Math.round(Math.random(1) * 2) + 1; //не более 3 вариантов, позже сделаем выбор макс вариантов
let game = 1;
    switch (selection) {
        case 1: game = brainEven;
        break;
        case 2: game = brainCalc;
        break;
        case 3: game = brainGCD;
    };
let NumberOfAnswers = 0;
for ( ; NumberOfAnswers !== 3; ) {
    let correctAnswer = game();
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
        console.log('Correct!');
        NumberOfAnswers += 1;
        }
        else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
            break;
        } 
        };
    if (NumberOfAnswers === 3) {
        console.log(`Congratulations, ${name}!`);
    }
    else console.log(`Let's try again, ${name}!`);
