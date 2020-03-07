/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let start = 0,
    end = s.length - 1,
    minLen = Number.MAX_VALUE;
  let left = 0,
    right = 0;
  let window = {},
    needs = {};
  for (let ch of t) {
    if (ch in needs) needs[ch]++;
    else needs[ch] = 1;
  }
  for (let ch of s) {
    window[ch] = 0;
  }

  let match = 0;
  while (right < s.length) {
    let c1 = s[right];
    if (c1 in needs) {
      window[c1]++;
      if (window[c1] === needs[c1]) {
        match++;
      }
    }
    right++;
    while (match === Object.keys(needs).length) {
      if (right - left < minLen) {
        start = left;
        end = right;
        minLen = right - left;
      }
      let c2 = s[left];
      if (c2 in needs) {
        window[c2]--;
        if (window[c2] < needs[c2]) {
          match--;
        }
      }
      left++;
    }
  }
  return minLen === Number.MAX_VALUE ? "" : s.slice(start, end);
};
