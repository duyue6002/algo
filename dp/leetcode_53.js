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

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let dp = Array(nums.length);
  dp[0] = nums[0];
  let result = dp[0]; // 增加一个临时变量存储最大值
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    result = Math.max(result, dp[i]);
  }
  return result;
};
