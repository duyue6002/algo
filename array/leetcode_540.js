/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i] && j - i === 1) return nums[i];
    if (j - i > 1) {
      i = j;
    }
  }
  return nums[i];
};
