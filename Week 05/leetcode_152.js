/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let imax = nums[0],
    imin = nums[0];
  let dp = nums.slice();
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      [imax, imin] = [imin, imax];
    }
    imax = Math.max(imax * nums[i], nums[i]);
    imin = Math.min(imin * nums[i], nums[i]);
    dp[i] = imax;
  }
  return Math.max(...dp);
};

maxProduct([2, 3, -2, 4, -2]);
