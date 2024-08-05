import readlineSync from 'readline-sync';
import welcome from './cli.js';

let NumberOfAnswers = 0;
const startAllGames = (description, getGameData) => {
  const name = welcome();
  console.log(description);
  for (; NumberOfAnswers !== 3;) {
    const gameData = getGameData();
    const question = gameData[0];
    const correctAnswer = gameData[1];
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      NumberOfAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
      );
      break;
    }
  }
  if (NumberOfAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  } else console.log(`Let's try again, ${name}!`);
};
export default startAllGames;
