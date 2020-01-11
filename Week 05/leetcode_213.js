/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  nums[nums.length] = nums[0];
  let dp = Array(nums.length);
  dp[0] = nums[1];
  dp[1] = Math.max(nums[1], nums[2]);
  let res = Math.max(dp[0], dp[1]);
  for (let i = 2; i < dp.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    res = Math.max(res, dp[i]);
  }
  return res;
};

rob([2, 3, 2]);
