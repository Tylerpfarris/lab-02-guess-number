// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { compareNumbersFunc, checkGuessesLeftFunc } from '../utils.js';
const test = QUnit.test;

test('it should return 1 if the argument is "guess" > "correctNumber"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbersFunc(10, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 1 if users guess is === 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkGuessesLeftFunc(0);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});