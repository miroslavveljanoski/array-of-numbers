'use strict';
console.log('--- loading: remove number');


/**
 * filters out all values that are strictly equal to toRemove
 * returns a new array, does not modify arrOfNumbers
 * @param {number[]} arrOfNumbers - the numbers to filter
 * @param {number} toRemove - the number to remove
 * @returns {number[]} the filtered numbers
 */
const removeNumber = (arrOfNumbers, toRemove) => {
  if (!Array.isArray(arrOfNumbers)) {
    throw new TypeError('first parameter must be an array');
  }
  if (!arrOfNumbers.every(entry => typeof entry === 'number')) {
    throw new TypeError('first parameter must contain only numbers')
  }
  if (typeof toRemove !== 'number') {
    throw new TypeError('second parameter must be a number');
  }

  // write the logic!
};




describe('removeNumber: removes all instances of a number in an array', () => {
  describe('correctly filters the array', () => {
    it('returns an empty for an empty array', () => {
      const expected = [];
      const actual = removeNumber([], 100);
      assert.deepStrictEqual(actual, expected);
    });
    it('removes nothing if the number is not present', () => {
      const expected = [1, 2, 3];
      const actual = removeNumber([1, 2, 3], 4);
      assert.deepStrictEqual(actual, expected);
    });
    it('removes everything when there are no other numbers', () => {
      const expected = [];
      const actual = removeNumber([3, 3, 3], 3);
      assert.deepStrictEqual(actual, expected);
    });
    it('removes only the correct number', () => {
      const expected = [4, 6];
      const actual = removeNumber([4, 5, 6], 5);
      assert.deepStrictEqual(actual, expected);
    });
  });
  describe('uses the arguments correctly', () => {
    it('does not modify the first parameter', () => {
      const arg = [1, 2, 3, 4];
      removeNumber(arg, 2);
      assert.deepStrictEqual(arg, [1, 2, 3, 4]);
    });
    it('throws an error if the first argument is not an array', () => {
      const shouldThrow = () => removeNumber('hello!');
      assert.throws(shouldThrow, TypeError, 'first parameter must be an array');
    });
    it('throws an error if the first argument contains non-numbers', () => {
      const shouldThrow = () => removeNumber([1, 2, '3', 4,]);
      assert.throws(shouldThrow, TypeError, 'first parameter must contain only numbers');
    });
    it('throws an error if the second argument is not a number', () => {
      const shouldThrow = () => removeNumber([1, 2, 3, 4,], '4');
      assert.throws(shouldThrow, TypeError, 'second parameter must be a number');
    });
  });
});



const removeNumberHandler = () => {
  console.log('\n--- calling: remove number handler');
  console.log('numbers (before):', typeof numbers, '\n', numbers);

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

  numbers = _;
  console.log('numbers (after):', typeof numbers, '\n', numbers);

  displayArrayHandler(numbers, `successfully removed ${userNumber}`);
};
