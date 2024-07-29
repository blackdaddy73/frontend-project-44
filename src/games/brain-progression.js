#!/usr/bin/env node
import getRandomNumbers from '../../utilities/randomnumbers.js';
const brainProgression = () => {
    console.log('What number is missing in the progression?');
    const randomNumbers = getRandomNumbers();
    const startProgression = randomNumbers[0];
    const stepProgression = Math.round(randomNumbers[1] / 10 + 1);
    const progressionArray = [startProgression];
    const hiddenNumberInProgressionArray = Math.round(Math.random(1) * 9);
    for (let i = 1; i < 10; i += 1) {
        progressionArray[i] = progressionArray[i - 1] + stepProgression;
    }
const correctAnswer = progressionArray[hiddenNumberInProgressionArray]
progressionArray[hiddenNumberInProgressionArray] = '..';
console.log ('Question: ', progressionArray.join(' '));
return correctAnswer.toString();
};
export default brainProgression;