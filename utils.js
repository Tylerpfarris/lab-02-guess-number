export function compareNumbers(guess, correctNumber) {

    const tooHighOrLowSpan = document.getElementById('toHighOrLow');
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


