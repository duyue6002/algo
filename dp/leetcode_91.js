/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let dp = Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = s[0] === "0" ? 0 : 1;
  for (let i = 2; i < dp.length; i++) {
    let one = parseInt(s[i - 1]);
    let two = parseInt(s.slice(i - 2, i));
    if (one >= 1 && one <= 9) {
      dp[i] += dp[i - 1];
    }
    if (two >= 10 && two <= 26) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[s.length];
};

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s[0] === "0") return 0;
  let n = s.length;
  let dp = Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    if (s[i - 1] === "0") {
      if (s[i - 2] === "1" || s[i - 2] === "2") {
        dp[i] = dp[i - 2];
      } else {
        return 0;
      }
    } else if (
      s[i - 2] === "1" ||
      (s[i - 2] === "2" && s[i - 1] >= "1" && s[i - 1] <= "6")
    ) {
      dp[i] = dp[i - 1] + dp[i - 2];
    } else {
      dp[i] = dp[i - 1];
    }
  }
  return dp[n];
};

numDecodings("227");

