'use strict';
console.log('--- loading: add number');

const addNumberHandler = () => {
  console.log('\n--- calling: add number handler');
  // read user input
  const userInput = prompt("please enter a number to add");
  console.log('userInput:', typeof userInput, '\n', userInput);
  if (userInput === null) {
    return;
  }

  const userNumber = Number(userInput);
  console.log('userNumber:', typeof userNumber, '\n', userNumber);
  // validate user number
  if (isNaN(userNumber)) {
    alert(`${userInput} is not a valid number`);
    return;
  }

  console.log('numbers (before):', typeof numbers, '\n', numbers);
  // add the user's number to the main shared array of numbers
  _;
  console.log('numbers (after):', typeof numbers, '\n', numbers);

  displayArrayHandler();
};
