'use strict';
let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

console.log(`secret number is ${secretNumber}`);

//check button runner
let toRunCheck = function () {
  let userGuess = document.querySelector('.guess').value;

  //if game is already won, then dont let the check btn do anything
  if (
    document.querySelector('.message').textContent != `😎 You win!` &&
    document.querySelector('.message').textContent != `💥 You Lose!`
  ) {
    //if nothing is entered
    if (!userGuess) {
      document.querySelector('.message').textContent = `🚫 Not a number!`;
    }
    //correct guess
    else if (Number(userGuess) === secretNumber) {
      document.querySelector('.message').textContent = `😎 You win!`;
      //if beat highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
    //wrong guess
    else if (Number(userGuess) !== secretNumber) {
      //if score is not 0
      if (score != 0) {
        document.querySelector('.score').textContent = --score;
        if (score === 0)
          document.querySelector('.message').textContent = `💥 You Lose!`;
        //hint 1 of wrong guess
        else {
          if (Number(userGuess) < secretNumber)
            document.querySelector('.message').textContent = `too low...`;
          //hint 2 of wrong guess
          else if (Number(userGuess) > secretNumber)
            document.querySelector('.message').textContent = `too high...`;
        }
      }
    }
  }
};

//again button runner
let toRunAgain = function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = `Start guessing...`;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  console.log(`secret number is ${secretNumber}`);
};

//check button
document.querySelector('.check').addEventListener('click', toRunCheck);

//again button
document.querySelector('.again').addEventListener('click', toRunAgain);
