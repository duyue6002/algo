/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  let dp = Array.from(Array(t.length + 1), () => Array(s.length + 1).fill(0));
  for (let i = 0; i <= s.length; i++) {
    dp[0][i] = 1;
  }
  for (let i = 1; i <= t.length; i++) {
    for (let j = i; j <= s.length; j++) {
      if (t[i - 1] === s[j - 1]) {
        // s和t都可以删掉一位，或者s删掉一位
        dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
      } else {
        // 不相等时s可以删掉一位
        dp[i][j] = dp[i][j - 1];
      }
    }
  }
  return dp[t.length][s.length];
};

numDistinct("rabbbit", "rabbit");
