#!/usr/bin/env node
import getRandomNumbers from '../randomnumbers.js';
import startAllGames from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const getGameData = () => {
  const randomNumbers = getRandomNumbers();
  let correctAnswer = 'yes';
  if (randomNumbers[0] % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  const question = `Question: ${randomNumbers[0]}`;
  const gameData = [question, correctAnswer];
  return gameData;
};

export default () => {
  startAllGames(description, getGameData);
};
