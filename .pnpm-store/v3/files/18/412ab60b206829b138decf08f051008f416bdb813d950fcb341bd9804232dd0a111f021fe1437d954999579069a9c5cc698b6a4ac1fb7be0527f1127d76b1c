'use strict';

module.exports = (object, predicate) => {
	const result = {};
	const isArray = Array.isArray(predicate);

	for (const [key, value] of Object.entries(object)) {
		if (isArray ? predicate.includes(key) : predicate(key, value, object)) {
			Object.defineProperty(result, key, {
				value,
				writable: true,
				enumerable: true,
				configurable: true
			});
		}
	}

	return result;
};
