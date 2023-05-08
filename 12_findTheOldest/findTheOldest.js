const findTheOldest = function(obj) {
  let oldestAgeCounter = 0;
  let oldestPersonIndex = 0;

  const d = new Date();
  let currentYear = d.getFullYear();


  for (key in obj) {
    if(obj[key].yearOfDeath == undefined){
      obj[key].yearOfDeath = currentYear;
    }
    if ((obj[key].yearOfDeath - obj[key].yearOfBirth) > oldestAgeCounter) {
      oldestAgeCounter = obj[key].yearOfDeath - obj[key].yearOfBirth;
      oldestPersonIndex = key;
    }
  }

  return obj[oldestPersonIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
