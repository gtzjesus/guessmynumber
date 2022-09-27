'use strict';

// Variables Needed For Guessing Game
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Display the secret number
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.number').textContent = '?';

// Event Listener For Messages + Body Features
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // No Input
  if (!guess) {
    // document.querySelector('.message').textContent = '🛑 No number!';
    displayMessage('🛑 No number!');

    // When Player Wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent =
    //   '🐓 Winner Winner Chicken Dinner';
    displayMessage('🐓 Winner Winner Chicken Dinner');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // Implementation of High Score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When Guess is Wrong (Refactored DRY METHOD)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber
      //       ? '📉 Too High, try again'
      //       : '📉 Too Low, try again';

      displayMessage(
        guess > secretNumber
          ? '📉 Too High, try again'
          : '📉 Too Low, try again'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = '☠️ Game Over';
      displayMessage('☠️ Game Over');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }

  //   // When Guess > Number
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent =
  //         guess > secretNumber
  //           ? '📉 Too High, try again '
  //           : '📉 Too Low, try again ';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '☠️ Game Over';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = '#FF0000';
  //       document.querySelector('.number').textContent = secretNumber;
  //     }

  //     // When Guess < Number
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too Low, try again ';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '☠️ Game Over';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = '#FF0000';
  //       document.querySelector('.number').textContent = secretNumber;
  //     }
  //   }
});

// Event Listener For Again Button
document.querySelector('.again').addEventListener('click', function () {
  // Update Secret Number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').value = secretNumber;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').textContent = '?';

  // Update Score
  score = 5;
  document.querySelector('.score').value = score;
  document.querySelector('.score').textContent = score;

  // Update Messages + Body
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  // Update Input Field
  document.querySelector('.guess').value = '';
});

// Implementation of High Scores
