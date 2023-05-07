const fibonacci = function(index) {
  let sequence = [];
  let number1 = 1;
  let number2 = 1;
  let nexNumber;

  for (let i = 0; i < index; i++){
    sequence.push(number1);
    nexNumber = number1 + number2;
    number1 = number2;
    number2 = nexNumber;
  }
  return sequence[index-1]
};

// Do not edit below this line
module.exports = fibonacci;
