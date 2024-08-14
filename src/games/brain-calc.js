import generateRandomNumber from '../randomnumbers.js';
import startAllGames from '../index.js';

const calculationСorrectAnswer = (num1, action, num2) => {
  let result = 0;
  switch (action) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      console.log('error');
  }
  return result;
};

const description = 'What is the result of the expression?';
const getGameData = () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const arrAction = ['+', '-', '*'];
  const action = arrAction[Math.floor(Math.random() * arrAction.length)];
  const correctAnswer = calculationСorrectAnswer(num1, action, num2);
  const question = `Question: ${num1} ${action} ${num2}`;
  const gameData = [question, correctAnswer.toString()];
  return gameData;
};

export default () => {
  startAllGames(description, getGameData);
};
