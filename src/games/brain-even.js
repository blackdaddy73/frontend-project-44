#!/usr/bin/env node
import getRandomNumbers from '../randomnumbers.js';
import startAllGames from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const getGameData = () => {
  const number = getRandomNumbers();
  let correctAnswer = isEven(number[0]);
  correctAnswer === true ? correctAnswer = 'yes' : correctAnswer = 'no';
  const question = `Question: ${number[0]}`;
  const gameData = [question, correctAnswer];
  return gameData;
};

export default () => {
  startAllGames(description, getGameData);
};

const isEven = (number) => number % 2 === 0 ? true : false;