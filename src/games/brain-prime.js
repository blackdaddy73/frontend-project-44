#!/usr/bin/env node
import getRandomNumbers from '../../utilities/randomnumbers.js';
const brainPrime = () => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    const randomNumbers = getRandomNumbers();
    const isPrimeNumber = randomNumbers[0];
    console.log('Question: ', isPrimeNumber);
    let correctAnswer = "no";
    if (isPrimeNumber % 2 === 0 || isPrimeNumber === 1) {
        return correctAnswer;
    }
    for (let i = 2; i <= isPrimeNumber / 2 ; i += 1) {
        if (isPrimeNumber % i === 0) {
            return correctAnswer;
        }
    }
    correctAnswer = "yes";    
    return correctAnswer;
};
export default brainPrime;