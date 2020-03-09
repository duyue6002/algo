/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let cache = Array(1001);
  let res = [];
  for (let num of arr1) {
    cache[num]++;
  }
  for (let num of arr2) {
    while (cache[num] > 0) {
      res.push(num);
      cache[num]--;
    }
  }
  for (let num = 0; num < 1001; num++) {
    while (cache[num] > 0) {
      res.push(num);
      cache[num]--;
    }
  }
  return res;
};