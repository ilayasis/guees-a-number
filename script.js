'use strict';
//DOM exmpl

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number !';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//APP

//מספר רנדומאלי
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//הכנסת מספר לבדיקה
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // if (guess < 0) {
  //   document.querySelector('.message').textContent =
  //     'Not optional , Try Number bigger then 0 ';
  // }

  //כאשר המשתמש לא יכניס ערך
  if (!guess) {
    displayMessage('NaN,Try Again');
    // document.querySelector('.message').textContent = 'NaN,Try Again ';

    //מתי שהמשתמש יכניס ספרה נכונה
  } else if (guess === secretNumber) {
    displayMessage('Amazing !,Correct Number');
    // document.querySelector('.message').textContent = 'Amazing !,Correct Number';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#a8e063';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //מתי שהמשתמש יכניס ספרה גדולה מהספרה הסודית
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too High !' : 'Too Low !';
      displayMessage(guess > secretNumber ? 'Too High !' : 'Too Low !');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You Lost The Game !';
      displayMessage('You Lost The Game !');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
