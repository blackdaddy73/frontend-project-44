const generateRandomNumber = (forMaxRandomNumber = 99) => {
  const randomNumber = Math.round(Math.random(1) * forMaxRandomNumber) + 1;
  return randomNumber;
};
export default generateRandomNumber;
