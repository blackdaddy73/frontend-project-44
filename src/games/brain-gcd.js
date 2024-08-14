import generateRandomNumber from '../randomnumbers.js';
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
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const maxNumber = Math.max(number1, number2);
  const minNumber = Math.min(number1, number2);
  correctAnswer = gcd(minNumber, maxNumber);
  const question = `Question: ${number1} ${number2}`;
  const gameData = [question, correctAnswer.toString()];
  return gameData;
};

export default () => {
  startAllGames(description, getGameData);
};
