'use strict';
console.log('--- loading: display array');


/**
 * converts an array of strings into an alert-friendly string
 *  each number is on a new line
 * @param {number[]} arrOfNumbers - an array of numbers to reduce
 * @returns {string} a string of numbers on newlines
 */
const reduceForAlert = (arrOfNumbers) => {
  if (!Array.isArray(arrOfNumbers)) {
    throw new TypeError('parameter must be an array');
  }
  if (!arrOfNumbers.every(entry => typeof entry === 'number')) {
    throw new TypeError('parameter must contain only numbers')
  }

  // write the logic!
};



describe('reduceForAlert: reduces an array of numbers into an alert-friendly string', () => {
  describe('correctly reduces the array', () => {
    it('returns an empty string for an empty array', () => {
      const expected = '';
      const actual = reduceForAlert([]);
      assert.strictEqual(actual, expected);
    });
    it('adds a newline after each number', () => {
      const expected = '300\n';
      const actual = reduceForAlert([300]);
      assert.strictEqual(actual, expected);
    });
    it('reduces many numbers', () => {
      const expected = '300\n0\n123\n24.5\n7\n30.9\n';
      const actual = reduceForAlert([300, 0, 123, 24.5, 7, 30.9]);
      assert.strictEqual(actual, expected);
    });
  });
  describe('uses the argument correctly', () => {
    it('does not modify the argument array', () => {
      const arg = [1, 2, 3, 4];
      reduceForAlert(arg);
      assert.deepStrictEqual(arg, [1, 2, 3, 4]);
    });
    it('throws an error if the argument is not an array', () => {
      const shouldThrow = () => reduceForAlert('hello!');
      assert.throws(shouldThrow, TypeError, 'parameter must be an array');
    });
    it('throws an error if the argument contains non-numbers', () => {
      const shouldThrow = () => reduceForAlert([1, 2, '3', 4,]);
      assert.throws(shouldThrow, TypeError, 'parameter must contain only numbers');
    });
  });
});


// this handler works, no ned to change it.  Just to study it!
const displayArrayHandler = (arrayToDisplay = numbers, message = 'all saved numbers') => {
  console.log('\n--- calling: display array handler');
  console.log('arrayToDisplay:', typeof arrayToDisplay, '\n', arrayToDisplay);
  console.log('message:', typeof message, '\n', message);

  const stringToDisplay = reduceForAlert(arrayToDisplay);
  console.log('stringToDisplay:', typeof stringToDisplay, '\n', stringToDisplay);

  alert(`${message}:\n${stringToDisplay}`);
};


/* about default parameters
  https://codeburst.io/understanding-default-parameters-in-javascript-5f3c4dcfc838
  https://www.javascripttutorial.net/es6/javascript-default-parameters/
  hardcoded default: http://www.pythontutor.com/live.html#code=//%20hardcoded%20default%20value%0Aconst%20funky%20%3D%20%28param%20%3D%20'yo'%29%20%3D%3E%20%7B%0A%20%20return%20param%3B%0A%7D%3B%0A%0Aconst%20noArg%20%3D%20funky%28%29%3B%0A%0Aconst%20stringArg%20%3D%20funky%28'jam'%29%3B%0A%0Aconst%20nullArg%20%3D%20funky%28null%29%3B%0A%0Aconst%20boolArg%20%3D%20funky%28true%29%3B%0A%0Aconst%20numberArg%20%3D%20funky%2812%29%3B%0A%0Aconst%20undefinedArg%20%3D%20funky%28undefined%29%3B&cumulative=false&curInstr=19&heapPrimitives=false&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
  variabled default: http://www.pythontutor.com/live.html#code=//%20variabled%20default%20value%0Aconst%20defaultParam%20%3D%20'yo'%3B%0A%0Aconst%20funky%20%3D%20%28param%20%3D%20defaultParam%29%20%3D%3E%20%7B%0A%20%20return%20param%3B%0A%7D%3B%0A%0Aconst%20noArg%20%3D%20funky%28%29%3B%0A%0Aconst%20stringArg%20%3D%20funky%28'jam'%29%3B%0A%0Aconst%20nullArg%20%3D%20funky%28null%29%3B%0A%0Aconst%20boolArg%20%3D%20funky%28true%29%3B%0A%0Aconst%20numberArg%20%3D%20funky%2812%29%3B%0A%0Aconst%20undefinedArg%20%3D%20funky%28undefined%29%3B&cumulative=false&curInstr=0&heapPrimitives=false&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
*/
