#!/usr/bin/env node
import readlineSync from 'readline-sync';
const name = welcome();
const startAllGames = () => {
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
};
