'use strict';
console.log('--- loading: add number');

const addNumberHandler = () => {
  console.log('\n--- calling: add number handler');

  const userInput = _;
  console.log('userInput:', typeof userInput, '\n', userInput);
  if (_) {
    return;
  }

  const userNumber = _;
  console.log('userNumber:', typeof userNumber, '\n', userNumber);
  if (_) {
    alert(`${userInput} is not a valid number`);
    return;
  }

  console.log('numbers (before):', typeof numbers, '\n', numbers);
  // add the user's number to the main shared array of numbers
  _;
  console.log('numbers (after):', typeof numbers, '\n', numbers);

  displayArrayHandler();
};
