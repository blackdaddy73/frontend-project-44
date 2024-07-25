#!/usr/bin/env node
const brainEven = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let randomNumber = Math.round(Math.random(1) * 99) + 1;
    let isEven = true;
    let correctAnswer = 'yes';
    randomNumber % 2 === 0 ? isEven = true : isEven = false;
    isEven === true ? correctAnswer = 'yes' : correctAnswer = 'no';
    console.log('Question: ', randomNumber);
    return correctAnswer;
    };
export default brainEven;