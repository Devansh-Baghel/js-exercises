const palindromes = function (str) {
  let result = "";

  // Loop over the string in reverse and append each character
  for(let i = str.length - 1; i >= 0; i--){
    result += str[i];
  }

  if (result === str) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
