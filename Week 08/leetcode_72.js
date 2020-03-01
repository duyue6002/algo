/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let m = word1.length,
    n = word2.length;
  let dp = Array.from(Array(m + 1), () => Array(n + 1));
  for (let k = 0; k <= m; k++) {
    dp[k][0] = k;
  }
  for (let k = 0; k <= n; k++) {
    dp[0][k] = k;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
      }
    }
  }
  return dp[m][n];
};
