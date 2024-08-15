import readlineSync from 'readline-sync';
import welcome from './cli.js';

const startAllGames = (description, getGameData) => {
  const name = welcome();
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = getGameData();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default startAllGames;
