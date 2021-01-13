import { compareNumbersFunc, checkGuessesLeftFunc, randomNumberFunc } from './utils.js';

const makeGuessButton = document.getElementById('makeGuess');
const userGuessInput = document.getElementById('user-Guess');
const resetButton = document.getElementById('reset');

let guessesRemainSpan = document.getElementById('guesses-Remain');
let usersGuessesRemaining = 4;
const randomNumber = Math.ceil(Math.random() * 20);

//guess button
makeGuessButton.addEventListener('click', () => {
  
    --usersGuessesRemaining;
    guessesRemainSpan.textContent = usersGuessesRemaining;
    checkGuessesLeftFunc(guessesRemainSpan);

    if (usersGuessesRemaining === 0) {
        makeGuessButton.disabled = true;
    }
    compareNumbersFunc((Number(userGuessInput.value)), randomNumber);
});

//reset button 

resetButton.addEventListener('click', () => {
    userGuessInput.value = '';
    guessesRemainSpan.textContent = usersGuessesRemaining;
    usersGuessesRemaining = 4;
    makeGuessButton.disabled = false;

});        
