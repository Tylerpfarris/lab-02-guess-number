const tooHighOrLowSpan = document.getElementById('toHighOrLow');

export function makeRandomNumberFunc() {
    return Math.ceil(Math.random() * 20);
}

export function compareNumbersFunc(guess, correctNumber) {
    if (guess > correctNumber) return 1;
    if (guess < correctNumber) return -1;
    return 0;
}

export function messageStringFunc(compareReturn) {
    const tooHighString = `thats too high`;
    const tooLowString = `thats too low`;
    const youGotItString = `you nailed it!!!`;

    if (compareReturn === 1) {
        tooHighOrLowSpan.textContent = tooHighString;
    }
    else if (compareReturn === -1) {
        tooHighOrLowSpan.textContent = tooLowString;
    }
    else if (compareReturn === 0) {
        tooHighOrLowSpan.textContent = youGotItString;
    }
}

    //checking if user has any guesses left

export function checkGuessesLeftFunc(usersGuesses) {
    const noGuessesLeft = `Luck wasn't on your side today`;

    if (usersGuesses === 0) {
        tooHighOrLowSpan.textContent = noGuessesLeft; 
    }
}

  

