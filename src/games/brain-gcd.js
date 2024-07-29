#!/usr/bin/env node
import getRandomNumbers from '../../utilities/randomnumbers.js';
const brainGCD = () => {
    console.log('Find the greatest common divisor of given numbers.');
    const randomNumbers = getRandomNumbers();
    let maxNumber = Math.max(randomNumbers[0], randomNumbers[1]);
    let minNumber = Math.min(randomNumbers[0], randomNumbers[1]);
    let temp = 0;
    let correctAnswer = 0;
    console.log('Question: ', maxNumber, minNumber);
    for (let i = maxNumber; minNumber != 0; ) {
        temp = minNumber;
        minNumber = maxNumber % minNumber;
        maxNumber = temp;
        correctAnswer = temp;
    };
return correctAnswer.toString();
};
export default brainGCD;