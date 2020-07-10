'use strict';
console.log('--- loading: find average');


/**
 * computes the average of all numbers in an array of numbers
 * @param {number[]} arrOfNumbers - the numbers to average
 * @returns {number} the average of all numbers in the array
 */
const reduceToAverage = (arrOfNumbers) => {
  if (!Array.isArray(arrOfNumbers)) {
    throw new TypeError('parameter must be an array');
  }
  if (!arrOfNumbers.every(entry => typeof entry === 'number')) {
    throw new TypeError('parameter must contain only numbers')
  }

  // write the logic

  // Solution 1: the simplest: create a variable for the summary of Array values using reducing method;
  // create a variable for the average that calculates using previous variable;
  // create a condition for an empty Array using less than or equal to; 
  
  // let total = 0;
  //  for (let item of arrOfNumbers) {
  //   total += item;
  //  }

  //  let average = total / arrOfNumbers.length;

  // if (arrOfNumbers.length <= 0) {
  //   return 0;
  // } else {
  //   return average;
  // }

  // Solution 2: two line solution, same logic as solution 1 but in a cleaner and elegant way
  // play with the condition for an empty Array using more than

  // let total = arrOfNumbers.reduce(  (anyName, someName) => anyName + someName, 0);
  // let average = total / arrOfNumbers.length;

  // if (arrOfNumbers.length > 0) {
  //   return average;
  // } else {
  //   return 0;
  // } 


  // Solution 3: one line solution I like the most: we declare a variable for the average of the Array
  // the variables calculates an average of the Array using reducing method
  // we compare Array.length to 0 in order to return 0 for an empty array
  
  let average = arrOfNumbers.reduce (( a, b) => a + b, 0) / arrOfNumbers.length;
  
  if (arrOfNumbers.length > 0) {
    return average;
  } else {
    return 0;
  }
  
};


describe('reduceToAverage: computes the average for an array of numbers', () => {
  describe('correctly computes the average', () => {
    it('returns 0 for an empty array', () => {
      const expected = 0;
      const actual = reduceToAverage([]);
      assert.strictEqual(actual, expected);
    });
    it('averages one number', () => {
      const expected = 300;
      const actual = reduceToAverage([300]);
      assert.strictEqual(actual, expected);
    });
    it('averages many numbers', () => {
      const expected = 3;
      const actual = reduceToAverage([1, 2, 3, 4, 5]);
      assert.strictEqual(actual, expected);
    });
  });
  describe('uses the argument correctly', () => {
    it('does not modify the argument array', () => {
      const arg = [1, 2, 3, 4];
      reduceToAverage(arg);
      assert.deepStrictEqual(arg, [1, 2, 3, 4]);
    });
    it('throws an error if the argument is not an array', () => {
      const shouldThrow = () => reduceToAverage('hello!');
      assert.throws(shouldThrow, TypeError, 'parameter must be an array');
    });
    it('throws an error if the argument contains non-numbers', () => {
      const shouldThrow = () => reduceToAverage([1, 2, '3', 4,]);
      assert.throws(shouldThrow, TypeError, 'parameter must contain only numbers');
    });
  });
});


// this handler works
const findAverageHandler = () => {
  console.log('\n--- calling: find average handler');
  console.log('numbers:', typeof numbers, '\n', numbers);

  const average = reduceToAverage(numbers);
  console.log('average:', typeof average, '\n', average);

  alert(`average: ${average}`);
};

