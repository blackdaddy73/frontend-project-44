#!/usr/bin/env node
import getRandomNumbers from '../randomnumbers.js';
import startAllGames from '../index.js';

let correctAnswer = 0;
const gcd = (minNumber, maxNumber) => {
  let temp = 0;
  let min = minNumber;
  let max = maxNumber;
  while (min !== 0) {
    temp = min;
    min = max % min;
    max = temp;
    correctAnswer = temp;
  }
  return correctAnswer;
};

const description = 'Find the greatest common divisor of given numbers.';
const getGameData = () => {
  const randomNumbers = getRandomNumbers();
  const maxNumber = Math.max(randomNumbers[0], randomNumbers[1]);
  const minNumber = Math.min(randomNumbers[0], randomNumbers[1]);
  correctAnswer = gcd(minNumber, maxNumber);
  const question = `Question: ${randomNumbers[0]} ${randomNumbers[1]}`;
  const gameData = [question, correctAnswer.toString()];
  return gameData;
};

export default () => {
  startAllGames(description, getGameData);
};
