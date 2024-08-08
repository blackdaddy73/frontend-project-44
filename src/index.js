import readlineSync from 'readline-sync';
import welcome from './cli.js';

const startAllGames = (description, getGameData) => {
  const name = welcome();
  console.log(description);
  let rounds = 0;
  for (; rounds !== 3;) {
    const gameData = getGameData();
    const question = gameData[0];
    const correctAnswer = gameData[1];
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      rounds += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${name}!`);
      return;
    }
  }
  if (rounds === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default startAllGames;
