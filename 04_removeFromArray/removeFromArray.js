const removeFromArray = function(array, ...args) {
	// let index = array.indexOf(itemToRemove);
	// array.splice(index, 1)
	// return array

	for (let arg of args){
		let index = array.indexOf(arg);
		console.log(index, arg);
		if (index != -1){
			array.splice(index, 1);
		}
	}

	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
