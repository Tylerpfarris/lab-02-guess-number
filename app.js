import { compareNumbersFunc, checkGuessesLeftFunc, messageStringFunc, makeRandomNumberFunc } from './utils.js';

const makeGuessButton = document.getElementById('makeGuess');
const userGuessInput = document.getElementById('user-Guess');
const resetButton = document.getElementById('reset');

let randomNumber = makeRandomNumberFunc();

let guessesRemainSpan = document.getElementById('guesses-Remain');
let usersGuessesRemaining = 4;

makeGuessButton.addEventListener('click', () => {
    --usersGuessesRemaining;
    
    guessesRemainSpan.textContent = usersGuessesRemaining;
    checkGuessesLeftFunc(guessesRemainSpan);

    if (usersGuessesRemaining === 0) makeGuessButton.disabled = true;
    
    const compReturn = compareNumbersFunc((Number(userGuessInput.value)), randomNumber);
    messageStringFunc(compReturn);
});

//reset button 

resetButton.addEventListener('click', () => {
    userGuessInput.value = '';
    guessesRemainSpan.textContent = usersGuessesRemaining;
    usersGuessesRemaining = 4;
    makeGuessButton.disabled = false;
    randomNumber = makeRandomNumberFunc();
});        
