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
	//debugger;
	if (!Array.isArray(arrOfNumbers)) {
		throw new TypeError('first parameter must be an array');
	}
	if (!arrOfNumbers.every((entry) => typeof entry === 'number')) {
		throw new TypeError('first parameter must contain only numbers');
	}
	if (typeof toRemove !== 'number') {
		throw new TypeError('second parameter must be a number');
	}

	// write the logic!

	let newArray = [];

	arrOfNumbers.forEach((element) => {
		if (element !== toRemove) {
			newArray.push(element);
		}
	});
	//// ES6 way to clone array
	numbers = [...newArray];
	return numbers;
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
			const shouldThrow = () => removeNumber([1, 2, '3', 4]);
			assert.throws(shouldThrow, TypeError, 'first parameter must contain only numbers');
		});
		it('throws an error if the second argument is not a number', () => {
			const shouldThrow = () => removeNumber([1, 2, 3, 4], '4');
			assert.throws(shouldThrow, TypeError, 'second parameter must be a number');
		});
	});
});

const removeNumberHandler = () => {
	debugger;
	console.log('\n--- calling: remove number handler');
	console.log('numbers (before):', typeof numbers, '\n', numbers);

	const userInput = prompt('type the number you want to remove');
	console.log('userInput:', typeof userInput, '\n', userInput);
	// check value is or empty or string Number.isNaN(NaN)-> true
	if (userInput === null || userInput === '' || Number.isNaN(Number(userInput))) {
		return alert('input is not number');
	}

	const userNumber = Number(userInput);
	console.log('userNumber:', typeof userNumber, '\n', userNumber);

	if (numbers.includes(userNumber)) {
		let check = removeNumber(numbers, userNumber);
		numbers = check;
		console.log('numbers (after):', typeof numbers, '\n', numbers);
		displayArrayHandler(numbers, `successfully removed ${userNumber}`);
	} else {
		alert(`${userNumber} is not in the array`);
	}
};
