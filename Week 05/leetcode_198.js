/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let dp = Array(nums.length + 2).fill(0);
  for (let i = 2; i < dp.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 2]);
  }
  return dp[dp.length - 1];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let dp = Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  let res = Math.max(dp[0], dp[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    res = Math.max(res, dp[i]);
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let dp = Array.from(Array(nums.length), () => Array(2).fill(0));
  dp[0][1] = nums[0];
  for (let i = 1; i < dp.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
    dp[i][1] = dp[i - 1][0] + nums[i];
  }
  return Math.max(dp[dp.length - 1][0], dp[dp.length - 1][1]);
};
