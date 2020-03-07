/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0,
    right = 0;
  let window = {};
  let res = 0;
  for (let ch of s) {
    window[ch] = 0;
  }
  while (right < s.length) {
    let c1 = s[right];
    window[c1]++;
    right++;
    while (window[c1] > 1) {
      let c2 = s[left];
      left++;
      window[c2]--;
    }
    res = Math.max(res, right - left);
  }
  return res;
};

lengthOfLongestSubstring("abcabcbb");