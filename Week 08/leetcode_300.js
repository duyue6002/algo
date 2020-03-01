/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
//   dp[i] = (smaller: dp[i - 1] + 1) or (larger: 1)
  let dp = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }
  return Math.max(...dp);
};

lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]);