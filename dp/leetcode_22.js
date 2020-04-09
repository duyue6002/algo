// DP 解法

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let dp = Array(n + 1);
  dp[0] = [""];
  for (let i = 1; i <= n; i++) {
    dp[i] = [];
    for (let j = 0; j < i; j++) {
      for (let k1 of dp[j]) {
        for (let k2 of dp[i - 1 - j]) {
          dp[i].push("(" + k1 + ")" + k2);
        }
      }
    }
  }
  return dp[n];
};
