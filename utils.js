
const tooHighOrLowSpan = document.getElementById('toHighOrLow');

export function compareNumbersFunc(guess, correctNumber) {


    const tooHighString = `thats too high`;
    const tooLowString = `thats too low`;
    const youGotItString = `you nailed it!!!`;
    
    if (guess > correctNumber) {
        tooHighOrLowSpan.textContent = tooHighString;
        return 1;
    } else if (guess < correctNumber) {
        tooHighOrLowSpan.textContent = tooLowString;
        return -1;
    } else {
        tooHighOrLowSpan.textContent = youGotItString;
        return 0;
    }

}

export function checkGuessesLeftFunc(usersGuesses) {

    const noGuessesLeft = `Luck wasn't on your side today`;

    if (usersGuesses === 0) {
        tooHighOrLowSpan.textContent = noGuessesLeft;
        
    }

}
