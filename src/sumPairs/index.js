/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
	// Initialize a new Map 'numbers', and a new Map 'solution'
	const numbers = new Map();
	const solution = new Map();

	// For each element e in A: add to 'numbers'
	for (let e of A) {
		numbers.set(e, e);
	}

	// For each element e in A: calculate difference from N, look up difference in A, if exists add pair to solution
	for (let e of A) {
		const diff = N - e;
		// Avoid number paired with itself, like [5, 5]
		if (diff !== e) {
			if (numbers.has(diff)) {
				// Avoid duplicates, like [3, 7] and [7, 3]
				solution.set(Math.min(e, diff), Math.max(e, diff));
			}
		}
	}
	// Convert 'solution' to an array and return
	return Array.from(solution);
}

module.exports = sumPairs;
