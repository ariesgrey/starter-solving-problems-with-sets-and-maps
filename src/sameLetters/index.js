/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
	// Initialize a new Map 'results'
	const results = new Map();

	// For each word in 'words': find all unique letters,
	for (let word of words) {
		word = word.toLowerCase();
		// Create a Set with all the letters of the word to remove duplicates
		const uniqueLetters = new Set(word.split(""));
		// Create an array of letters from the Set and sort alphabetically, then use join() to convert to a string
		const sortedLetters = Array.from(uniqueLetters).sort().join("");

		// If 'sortedLetters' is a key in 'results': add 'word' to the array associated with that key
		if (results.has(sortedLetters)) {
			results.get(sortedLetters).push(word);
		}
		// Else, make a new entry in 'results': key = 'sortedLetters', value: an array with 'word' as its only element
		else {
			results.set(sortedLetters, [word]);
		}
	}
	// Return 'results' Map
	return results;
}

module.exports = sameLetters;
