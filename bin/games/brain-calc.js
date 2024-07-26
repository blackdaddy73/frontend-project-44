#!/usr/bin/env node
const brainCalc = () => {
    console.log('What is the result of the expression?');
    let randomNumber = Math.round(Math.random(1) * 99) + 1;
    let randomNumber2 = Math.round(Math.random(1) * 99) + 1;
    let randomAction = Math.round(Math.random(1) * 2) + 1;
    let correctAnswer = 0;
   switch (randomAction) {
        case 1:
            randomAction = "+";
            correctAnswer = randomNumber + randomNumber2;
            break;
        case 2:
            randomAction = "-";
            correctAnswer = randomNumber - randomNumber2;
            break;
        case 3:
            randomAction = "*";
            correctAnswer = randomNumber * randomNumber2;
            break;
    };
    console.log('Question: ', randomNumber, randomAction, randomNumber2);
    return correctAnswer.toString();
};
export default brainCalc;