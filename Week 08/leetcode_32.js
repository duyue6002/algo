/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  if (s.length === 0) return 0;
  let dp = Array(s.length + 1).fill(0);
  for (let i = 1; i <= s.length; i++) {
    if (s[i - 1] === ")") {
      if (s[i - 2] === "(") {
        dp[i] = dp[i - 2] + 2;
      } else {
        let index = i - 2 - dp[i - 1];
        if (index >= 0 && s[index] === "(") {
          dp[i] = dp[i - 1] + 2 + dp[index];
        }
      }
    }
  }
  return Math.max(...dp);
};
