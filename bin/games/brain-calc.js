#!/usr/bin/env node
import getRandomNumbers from '../../utilities/randomnumbers.js';
const brainCalc = () => {
    const randomNumbers = getRandomNumbers();
    console.log('What is the result of the expression?');
    let randomAction = Math.round(Math.random(1) * 2) + 1;
    let correctAnswer = 0;
   switch (randomAction) {
        case 1:
            randomAction = "+";
            correctAnswer = randomNumbers[0] + randomNumbers[1];
            break;
        case 2:
            randomAction = "-";
            correctAnswer = randomNumbers[0] - randomNumbers[1];
            break;
        case 3:
            randomAction = "*";
            correctAnswer = randomNumbers[0] * randomNumbers[1];
            break;
    };
    console.log('Question: ', randomNumbers[0], randomAction, randomNumbers[1]);
    return correctAnswer.toString();
};
export default brainCalc;