/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let dp = Array(s.length + 1).fill(0);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      dp[i + 1] = 0;
    } else if (s[i] === ")") {
      if (s[i - 1] === "(") dp[i + 1] = dp[i - 1] + 2;
      else if (s[i - dp[i] - 1] === "(") {
        dp[i + 1] = dp[i] + 2 + dp[i - dp[i] - 1];
      }
    }
  }
  return Math.max(...dp);
};

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let dp = Array(s.length).fill(0);
  let imax = 0;
  for (let i = 1; i < s.length; i++) {
    if (
      s[i] === ")" &&
      i - dp[i - 1] - 1 >= 0 &&
      s[i - dp[i - 1] - 1] === "("
    ) {
      dp[i] =
        dp[i - 1] + 2 + (i - dp[i - 1] - 2 >= 0 ? dp[i - dp[i - 1] - 2] : 0);
      imax = Math.max(imax, dp[i]);
    }
  }
  return imax;
};

longestValidParentheses(")()())");
