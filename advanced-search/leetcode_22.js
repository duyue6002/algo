/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = Array();
  helper(result, "", n, 0, 0);
  return result;
};

var helper = function(result, str, n, left, right) {
  if (left === n && right === n) {
    result.push(str);
    return;
  }

  if (left < n) {
    helper(result, str + "(", n, left + 1, right);
  }

  if (right < n && right < left) {
    helper(result, str + ")", n, left, right + 1);
  }
};

// DP 解法

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
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

generateParenthesis(3);
