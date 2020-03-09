/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let len = s.length;
  if (len < 2) return s;
  let res = "";
  let maxLen = 0;
  for (let i = 0; i < len - 1; i++) {
    let odd = extendPalindrome(s, i, i); // odd
    let even = extendPalindrome(s, i, i + 1); // even
    let tmp = odd.length > even.length ? odd : even;
    if (tmp.length > maxLen) {
      maxLen = tmp.length;
      res = tmp;
    }
  }
  return res;
};

var extendPalindrome = function(s, i, j) {
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    i--;
    j++;
  }
  return s.slice(i + 1, j);
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length === 0) return s;
  let n = s.length;
  let dp = Array.from(Array(n), () => Array(n).fill(false));
  let res = s[0];
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i][j] = s[i] === s[j] && (i - j < 3 || dp[i - 1][j + 1]);
      if (dp[i][j] && i - j + 1 > res.length) {
        res = s.slice(j, i + 1);
      }
    }
  }
  return res;
};
