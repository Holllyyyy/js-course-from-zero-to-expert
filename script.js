'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; // trunc just give us integer, and math.random give us rqndom number from 0 to 20.
let score = 20;//state variable as secret number
let highscore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)

    //   ***WHEN NO INPUT****

    if (!guess) {
        displayMessage('No number')

        //  ***WHEN SAME ****

    } else if (guess === secretNumber) {
        //we use our function displayMessage and pass text inside string
        displayMessage('Correct number')

        document.querySelector('.number').textContent =
            secretNumber;

        document.querySelector('body').style.
            backgroundColor = '#60B347';

        document.querySelector('.number').style.width = '30rem'
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    //WHEN GUESS IS WRONG

    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high' : "Too Low")
            score--;
            document.querySelector('.score').textContent = score;
        } else {

            displayMessage('You lost the game')
            document.querySelector('.score').textContent = 0;
        }
    }
})

// n here we want to use again event listener but on button again and make refresh our page, and back all how it was before
document.querySelector('.again').addEventListener('click', function () {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing . . .")
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?"
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem"
})
