#!/usr/bin/env node
import getRandomNumbers from '../randomnumbers.js';
import startAllGames from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
let correctAnswer = 0;
const getGameData = () => {
  const randomNumbers = getRandomNumbers();
  const maxNumber = Math.max(randomNumbers[0], randomNumbers[1]);
  const minNumber = Math.min(randomNumbers[0], randomNumbers[1]);
  correctAnswer = gcd(minNumber, maxNumber); //запуск функции gcd 
  const question = `Question: ${randomNumbers[0]} ${randomNumbers[1]}`;
  const gameData = [question, correctAnswer.toString()];
  return gameData;
};

export default () => {
  startAllGames(description, getGameData);
};

const gcd = (minNumber, maxNumber) => {
  let temp = 0;
  while (minNumber !== 0) {
    temp = minNumber;
    minNumber = maxNumber % minNumber;
    maxNumber = temp;
    correctAnswer = temp;
  }
  return correctAnswer;
};