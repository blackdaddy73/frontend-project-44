#!/usr/bin/env node
import getRandomNumbers from "../randomnumbers.js";
import startAllGames from "../index.js";
const description = "Find the greatest common divisor of given numbers.";
const getGameData = () => {
  const randomNumbers = getRandomNumbers();
  let maxNumber = Math.max(randomNumbers[0], randomNumbers[1]);
  let minNumber = Math.min(randomNumbers[0], randomNumbers[1]);
  let temp = 0;
  let correctAnswer = 0;
  for (let i = maxNumber; minNumber != 0; ) {
    temp = minNumber;
    minNumber = maxNumber % minNumber;
    maxNumber = temp;
    correctAnswer = temp;
  }
  const question = `Question: ${randomNumbers[0]} ${randomNumbers[1]}`;
  const gameData = [question, correctAnswer.toString()];
  return gameData;
};

export default () => {
  startAllGames(description, getGameData);
};
