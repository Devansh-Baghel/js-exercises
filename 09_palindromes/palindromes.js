const palindromes = function (str) {
  let result = "";
  const punctuation = ["!", ",", "'", ".", "?", "-", "(", ")", " "];
  str = str.toLowerCase();
  // console.log(str);
  for(let i = 0; i < str.length; i++){
    if (punctuation.includes(str[i])){
      str = str.replace(str[i], "");
      i = 0;
    }
  }
  console.log(str);
  // Loop over the string in reverse and append each character
  for(let i = str.length - 1; i >= 0; i--){
    result += str[i];
  }

  if (result === str) {
    return true;
  }
  return false;
};
let a = palindromes("A car, a man, a maraca.");
// Do not edit below this line
module.exports = palindromes;
