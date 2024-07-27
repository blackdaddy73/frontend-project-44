#!/usr/bin/env node
import getRandomNumbers from '../../utilities/randomnumbers.js';
const brainEven = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const randomNumbers = getRandomNumbers();
    let isEven = true;
    let correctAnswer = 'yes';
    randomNumbers[0] % 2 === 0 ? isEven = true : isEven = false;
    isEven === true ? correctAnswer = 'yes' : correctAnswer = 'no';
    console.log('Question: ', randomNumbers[0]);
    return correctAnswer;
    };
export default brainEven;