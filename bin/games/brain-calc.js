#!/usr/bin/env node
const brainCalc = () => {
    console.log('What is the result of the expression?');
    let randomNumber = Math.round(Math.random(1) * 99) + 1;
    let randomNumber2 = Math.round(Math.random(1) * 99) + 1;
    let randomAction = Math.round(Math.random(1) * 2) + 1;
    switch (randomAction) {
        case 1: correctAnswer = randomNumber + randomNumber2;
        break;
        case 2: correctAnswer = randomNumber - randomNumber2;
        break;
        case 3: correctAnswer = randomNumber * randomNumber2;
        break;
    };
    return correctAnswer;
};
export default brainCalc;