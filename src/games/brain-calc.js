import getRandomNumbers from "../randomnumbers.js";
import startAllGames from "../index.js";
const description = "What is the result of the expression?";
const getGameData = () => {
  const randomNumbers = getRandomNumbers();
  let randomAction = Math.round(Math.random(1) * 2) + 1;
  let correctAnswer = 0;
  switch (randomAction) {
    case 1:
      randomAction = "+";
      correctAnswer = randomNumbers[0] + randomNumbers[1];
      break;
    case 2:
      randomAction = "-";
      correctAnswer = randomNumbers[0] - randomNumbers[1];
      break;
    case 3:
      randomAction = "*";
      correctAnswer = randomNumbers[0] * randomNumbers[1];
      break;
  }
  const question = `Question: ${randomNumbers[0]} ${randomAction} ${randomNumbers[1]}`;
  const gameData = [question, correctAnswer.toString()];
  return gameData;
};

export default () => {
  startAllGames(description, getGameData);
};
