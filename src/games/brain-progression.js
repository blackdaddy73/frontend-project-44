#!/usr/bin/env node
import getRandomNumbers from '../randomnumbers.js';
import startAllGames from '../index.js';
const description = 'What number is missing in the progression?';
const getGameData = () => {
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
const question = `Question: ${progressionArray.join(' ')}`;
const gameData = [question, correctAnswer.toString()];
return gameData;
};

export default () => {
    startAllGames(description, getGameData);
};