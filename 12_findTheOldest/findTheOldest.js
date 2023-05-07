const findTheOldest = function(obj) {
  let oldestAgeCounter = 0;
  let oldestPersonIndex = 0;

  for (key in obj) {
    if ((obj[key].yearOfDeath - obj[key].yearOfBirth) > oldestAgeCounter) {
      oldestAgeCounter = obj[key].yearOfDeath - obj[key].yearOfBirth;
      oldestPersonIndex = key;
    }
  }

  return obj[oldestPersonIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
