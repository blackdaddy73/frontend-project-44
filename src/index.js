import readlineSync from 'readline-sync';
import welcome from '../src/cli.js';
let NumberOfAnswers = 0;
const startAllGames = (getGameData) => {
    const name = welcome();
    const gameData = getGameData();
    const description = gameData[0];
    console.log(description);
    for ( ; NumberOfAnswers !== 3; ) {
        const question = gameData[1];
        const correctAnswer = gameData[2];
        console.log(question);
        const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
        console.log('Correct!');
        NumberOfAnswers += 1;
        const gameData = getGameData();
        }
        else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
            break;
        } 
        };
    if (NumberOfAnswers === 3) {
        console.log(`Congratulations, ${name}!`);
    }
    else console.log(`Let's try again, ${name}!`);
};
export default startAllGames;
