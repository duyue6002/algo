/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let map = {};
  for (let num of nums) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num]++;
    }
  }

  Object.keys(map).forEach(num => {
    if (map[num] === 1) {
      return num;
    }
  });
};
