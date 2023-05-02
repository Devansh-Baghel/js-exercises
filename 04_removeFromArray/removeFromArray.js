const removeFromArray = function(array, itemToRemove) {
	let index = array.indexOf(itemToRemove);
	array.splice(index, 1)
	return array
};

// Do not edit below this line
module.exports = removeFromArray;
