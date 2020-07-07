'use strict';
console.log('--- loading: find greater than');

/**
 * filters out all values that are not greater than lowValue
 * returns a new array, does not modify arrOfNumbers
 * @param {number[]} arrOfNumbers - the numbers to filter
 * @param {number} lowValue - number to compare against
 * @returns {number[]} the filtered numbers
 */
const findGreaterThan = (arrOfNumbers, lowValue) => {
  if (!Array.isArray(arrOfNumbers)) {
    throw new TypeError('first parameter must be an array');
  }
  if (!arrOfNumbers.every(entry => typeof entry === 'number')) {
    throw new TypeError('first parameter must contain only numbers')
  }
  if (typeof lowValue !== 'number') {
    throw new TypeError('second parameter must be a number');
  }

  // write the logic!
};



describe('findGreaterThan: keeps all numbers that are greater than a given value', () => {
  describe('correctly filters the array', () => {
    it('returns an empty for an empty array', () => {
      const expected = [];
      const actual = findGreaterThan([], 100);
      assert.deepStrictEqual(actual, expected);
    });
    it('works when all are greater than', () => {
      const expected = [4, 5, 6];
      const actual = findGreaterThan([4, 5, 6], 3);
      assert.deepStrictEqual(actual, expected);
    });
    it('works when all are less than', () => {
      const expected = [];
      const actual = findGreaterThan([4, 5, 6], 7);
      assert.deepStrictEqual(actual, expected);
    });
    it('works when there are both', () => {
      const expected = [6];
      const actual = findGreaterThan([4, 5, 6], 5);
      assert.deepStrictEqual(actual, expected);
    });
  });
  describe('uses the arguments correctly', () => {
    it('does not modify the first parameter', () => {
      const arg = [1, 2, 3, 4];
      findGreaterThan(arg, 2);
      assert.deepStrictEqual(arg, [1, 2, 3, 4]);
    });
    it('throws an error if the first argument is not an array', () => {
      const shouldThrow = () => findGreaterThan('hello!');
      assert.throws(shouldThrow, TypeError, 'first parameter must be an array');
    });
    it('throws an error if the first argument contains non-numbers', () => {
      const shouldThrow = () => findGreaterThan([1, 2, '3', 4,]);
      assert.throws(shouldThrow, TypeError, 'first parameter must contain only numbers');
    });
    it('throws an error if the second argument is not a number', () => {
      const shouldThrow = () => findGreaterThan([1, 2, 3, 4,], '4');
      assert.throws(shouldThrow, TypeError, 'second parameter must be a number');
    });
  });
});



const findGreaterThanHandler = () => {
  console.log('\n--- calling: find greater than handler');
  console.log('numbers:', typeof numbers, '\n', numbers);

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

  const filteredNumbers = findGreaterThan(numbers, userNumber);
  console.log('filteredNumbers:', typeof filteredNumbers, '\n', filteredNumbers);

  displayArrayHandler(filteredNumbers, `numbers greater than ${userNumber}`);
};
