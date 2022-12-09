#The first challenge- Guess my number

```js 
'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; // trunc just give us integer, and math.random give us rqndom number from 0 to 20.
let score = 20;//state variable as secret number
let highscore=0; 
const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}
// here we made function for message, so we can use it many times during our code,
// we grab class of message and added text with textContent. Message is our parameter, so whatever we write gonna show in our html.
// here we using event listener click and make it work, when we click on button check
//marked as 'click'
//the rest is function

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value) 
    // here we used Number so can convert from string to number, and class of guess what is our input, anf we have '.value' whats going to give us value by input.
   //console.log(guess, typeof guess);
     // here we checked what is guess, and thats how we got that we need to add number.
   
     //   ***WHEN NO INPUT****
    if (!guess) {
        displayMessage('No number')
        //we are using our function what we created earlier and just pass our message with string
      //Before we made function code looked like this in the next line 
      //document.querySelector('.message').textContent = 'no number '
       //so its much better and DRY when we create function and do like this.
       
        //  ***WHEN SAME ****
    }  else if (guess === secretNumber) {
   //we use our function displayMessage and pass text inside string
        displayMessage('Correct number')
        //this is how looked before we made a function 
        // document.querySelector('.message').textContent = 'correct number'
        //but its much more cleaner to write onthis way
       
        document.querySelector('.number').textContent =
         secretNumber;
         // this is just number random what we created at the start. Every time gonna be different
       //this how we using to change style. 
       //always '.style' and for example here we have background-color in css here in js we just use camelCase, so we write all together 
      //after we added string of color we wanted for our background  
       document.querySelector('body').style.
        backgroundColor='#60B347';
        //same process is for width to add.
        document.querySelector('.number').style.width='30rem'       
        // because we always wanna track our highscore, we needed to add this condition
        if(score>highscore){
highscore=score; // because here we made for highscore to change later on
document.querySelector('.highscore').textContent=highscore;// as we can see here.
         } } // so every time when we gonna hae better score, that score gonna be highscore

        //WHEN GUESS IS WRONG
        //not the same as random number what we get we have two cases high or low
else if (guess !==secretNumber){
    if (score > 1) {
        //we needed to add to be greater than 1
        //first way we did
//  document.querySelector('.message').textContent = guess > secretNumber ? 'too high' : "Too Low";
//we took message and added text  than we said :
// if guess(number in input) is greater than secret number, text should be too high otherwise too low
// but we have to alway care about DRY principle, (don't repeat yourself)
// so we used our fnction again n condition n make one line of code
displayMessage(guess > secretNumber ? 'Too high' : "Too Low")
score--;//score = score - 1; 
document.querySelector('.score').textContent = score;
    } else {
        // document.querySelector('.message').textContent =
        //  'you lost the game '
        displayMessage('You lost the game')
        document.querySelector('.score').textContent = 0;
    }//when we reach to 0. this is text what we get.
}
})
       //old code before DRT principle
    //     // when is too low
    //  else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'too low'
    //         score = score - 1;//score--
    //         document.querySelector('.score').textContent = score;

    //     } else {
    //         document.querySelector('.message').textContent = 'you lost the game '
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }

// n here we want to use again event listener but on button again and make refresh our page, and back all how it was before
document.querySelector('.again').addEventListener('click', function(){

     score = 20;//state variable as secretNumber
     secretNumber = Math.trunc(Math.random() * 20) + 1;

//    document.querySelector('.message').textContent="Start guessing..."
    displayMessage("Start guessing . . .")
   document.querySelector('.score').textContent=score; 
   document.querySelector('.number').textContent="?" 
   document.querySelector('.guess').value='';
   document.querySelector('body').style.backgroundColor="#222";
   document.querySelector('.number').style.width="15rem"
})
```
