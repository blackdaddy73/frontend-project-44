import getRandomNumbers from '../randomnumbers.js';
import startAllGames from '../index.js';

const description = 'What is the result of the expression?';
let correctAnswer = 0;
const getGameData = () => {
  const randomNumbers = getRandomNumbers();
  const num1 = randomNumbers[0];
  const num2 = randomNumbers[1];
  const arrAction = ['+', '-', '*'];
  const action = arrAction[Math.floor(Math.random() * arrAction.length)];
  correctAnswer = calculationСorrectAnswer(num1, action, num2);
  const question = `Question: ${num1} ${action} ${num2}`;
  const gameData = [question, correctAnswer.toString()];
  return gameData;
};

export default () => {
  startAllGames(description, getGameData);
};

const calculationСorrectAnswer = (num1, action, num2) => {
  switch (action) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      console.log('error');
  }
};
