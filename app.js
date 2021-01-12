// 1)go grab these DOM elements (that means ids!)

const makeGuessButton = document.getElementById('makeGuess');

const guessesRemainSpan = document.getElementById('guesses-Remain');

const tooHighOrLowSpan = document.getElementById('toHighOrLow');

const userGuessInput = document.getElementById('userGuess');

// 2)initialize state ( or global 'let')
//     -random number : n ('Math.random * 20)
//     -Guesses remain : 4 (let guessesRemain = 4)
let guessesRemain = 4;

let randomNumber = Math.ceil(Math.random() * 20);

// 3)Add eventListener to button
//     -On Click
makeGuessButton.addEventListener('click', () => {

    console.log(guessesRemain);
});

//         1) State: decrement remaining guesses by 1 (--)
//         2) Store user guess in variable ('Number(someInput.value)')
//         3) Compare user guess ith random number
//         4) View:
//             a) if user guess is greater than the random number, inject 'too high' into result span
//                 - View : check if there area any guesses left if not disable the input and display loosing message
//             b) if user guess is less than the random number, inject 'too low' into result span
//                 - View : check if there area any guesses left if not disable the input and display loosing message
//             c) if user guess is equal to the random number, congratulate the user.
//                 -diSable the input if they win
//         5) VIEW: if applicable, Change the remaining guesses text content
// 4)add another event listener onto the reset button
//     -On click
//         1)STATE: reset remaining guesses state to 4
//         2) STATE : Create a new random number
//         3) View: re-enable the inputS if they are disabled and fix the game text