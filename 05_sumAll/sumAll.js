const sumAll = function(start, end) {
	let entireArray = [];
	let result = 0;

	if(start < 0 ||
		end < 0 ||
		typeof(start) !== "number" ||
		typeof(end) !== "number"){
			return "ERROR"
		}

	if(start < end){
		for(let i = start; i <= end ; i++){
			entireArray.push(i)
		}
	}
	else{
		for(let i = end; i <= start; i++){
			entireArray.push(i)
		}
	}
	for(let i = 0; i < entireArray.length; i++){
		result += entireArray[i]
	}
	return result
};

// Do not edit below this line
module.exports = sumAll;
