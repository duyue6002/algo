/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let end = s.length - 1;
  let mid = end >> 1;
  for (let i = 0; i <= mid; i++) {
    [s[i], s[end - i]] = [s[end - i], s[i]];
  }
};

reverseString(["h", "e", "l", "l", "o", 'y']);