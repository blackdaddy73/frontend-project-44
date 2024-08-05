#!/usr/bin/env node
import getRandomNumbers from '../randomnumbers.js';
import startAllGames from '../index.js';
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getGameData = () => {
    const randomNumbers = getRandomNumbers();
    const isPrimeNumber = randomNumbers[0];
    const question = `Question: ${isPrimeNumber}`;
    let correctAnswer = 'yes';
    if ((isPrimeNumber % 2 === 0 && isPrimeNumber > 2) || isPrimeNumber === 1) {
        correctAnswer = 'no';
        const gameData = [question, correctAnswer];
        return gameData;
    } 
    for (let i = 2; i <= isPrimeNumber / 2 ; i += 1) {
        if (isPrimeNumber % i === 0) {
            correctAnswer = 'no';
            const gameData = [question, correctAnswer];
            return gameData;
        }
    }
    const gameData = [question, correctAnswer];
    return gameData;
};

export default () => {
    startAllGames(description, getGameData);
};