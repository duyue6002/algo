/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let arr = nums.slice();
  for (let i = 1; i < nums.length; i++) {
    arr[i] = Math.max(arr[i - 1], 0) + nums[i];
  }
  return Math.max(...arr);
};
