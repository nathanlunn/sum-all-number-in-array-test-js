const sumItems = function(array, initialSum = 0) {
  return array.reduce((sum, num) => {
    if (Array.isArray(num)) {
      sum = sumItems(num, sum);
    } else {
      sum = sum + num;
    }
    return sum;
  }, initialSum);
};

module.exports = sumItems;


// console.log(sumItems([1, 1, [1, 1, [ 1, 1], 1], 1, 1]))
// console.log(sumItems([[[4]], [[2]]]))
// console.log(sumItems([1, 2, 3, 4]))
