const sumAll = function(start, end) {
	let entireArray = [];
	let result = 0;
	for(let i = start; i <= end ; i++){
		entireArray.push(i)
	}
	for(let i = 0; i < entireArray.length; i++){
		result += entireArray[i]
	}
	return result
};

// Do not edit below this line
module.exports = sumAll;
