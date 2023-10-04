/*
Intersection: find all elements that are present in arrays 'a' and 'b'.
*/
function intersection(a, b) {
	// If either set is empty, return empty array
	if (a.length === 0 || b.length === 0) {
		return [];
	}

	// Initialize a new Map and a new Set
	const mapA = new Map();
	const result = new Set();

	// For each element e of a: add to the Map
	for (let e of a) {
		mapA.set(e, e);
	}

	// For each element e of b: if e is in the Map, add it to the Set
	for (let e of b) {
		if (mapA.has(e)) {
			result.add(e);
		}
	}

	// Convert Set to an array and return
	return Array.from(result);
}

module.exports = intersection;
