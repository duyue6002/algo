/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (!p) return !s;
  let firstMatch = !!s && (p[0] === "." || p[0] === s[0]);
  if (p.length >= 2 && p[1] === "*") {
    return isMatch(s, p.slice(2)) || (firstMatch && isMatch(s.slice(1), p));
  }
  return firstMatch && isMatch(s.slice(1), p.slice(1));
};

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let memo = Array.from(Array(s.length + 1), () =>
    Array(p.length + 1).fill(null)
  );
  return helper(s, p, 0, 0, memo);
};

var helper = function(s, p, i, j, memo) {
  if (memo[i][j] !== null) {
    return memo[i][j] == true;
  }
  let res = false;
  if (j === p.length) {
    res = i === s.length;
  } else {
    let firstMatch = i < s.length && (p[j] === "." || p[j] === s[i]);
    if (j <= p.length - 2 && p[j + 1] === "*") {
      res =
        helper(s, p, i, j + 2, memo) ||
        (firstMatch && helper(s, p, i + 1, j, memo));
    } else {
      res = firstMatch && helper(s, p, i + 1, j + 1, memo);
    }
  }
  memo[i][j] = res;
  return res;
};

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let dp = Array.from(Array(s.length + 1), () => Array(p.length + 1).fill(false));
  dp[s.length][p.length] = true;
  for (let i = s.length; i >= 0; i--) {
    for (let j = p.length - 1; j >= 0; j--) {
      let firstMatch = i < s.length && (p[j] === "." || p[j] === s[i]);
      if (j <= p.length - 2 && p[j + 1] === "*") {
        dp[i][j] = dp[i][j + 2] || (firstMatch && dp[i + 1][j]);
      } else {
        dp[i][j] = firstMatch && dp[i + 1][j + 1];
      }
    }
  }
  return dp[0][0];
};

isMatch("mississippi", "mis*is*p*.");
