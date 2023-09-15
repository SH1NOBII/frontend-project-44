import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

const replacementAnswer = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const userAnswer = (nameOfUser) => {
  const randomNumber = Math.floor(Math.random() * 101);
  let result = '';
  const answer = readlineSync
    .question(`Answer "yes" if the number is even, otherwise answer "no".\n Question: ${randomNumber}\n Your answer: `);
  if (randomNumber % 2 === 0 && answer === 'yes') {
    result = 'Correct!';
  } else if (randomNumber % 2 !== 0 && answer === 'no') {
    result = 'Cortect!';
  } else result = `${answer} is wrong answer ;(. Correct answer was ${replacementAnswer(randomNumber)}. Let's try again, ${nameOfUser}!`;
  return result;
};

export default userAnswer;
