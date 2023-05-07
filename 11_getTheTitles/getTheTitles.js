const getTheTitles = function(obj) {
  let titles = [];

  for(key in obj) {
    titles.push(obj[key].title);
  }

  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
