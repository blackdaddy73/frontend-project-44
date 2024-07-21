const AskYourName = () => {
    const name = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${name}!`);
};
export default AskYourName;