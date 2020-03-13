
module.exports = function countCats(backyard) {
  
  catCount = 0;

  backyard.forEach(element => {
    element.forEach(item => {
      if(item === "^^") {
        catCount++;
      }
    });
  });
  
  return catCount;

};