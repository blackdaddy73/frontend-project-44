import generateRandomNumber from '../randomnumbers.js';
import startAllGames from '../index.js';

const isEven = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const getGameData = () => {
  const number = generateRandomNumber();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = `Question: ${number}`;
  const gameData = [question, correctAnswer];
  return gameData;
};

export default () => {
  startAllGames(description, getGameData);
};
