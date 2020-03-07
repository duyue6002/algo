/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let left = 0,
    right = 0;
  let window = {},
    need = {};
  let res = [];
  for (let ch of p) {
    if (ch in need) need[ch]++;
    else need[ch] = 1;
  }
  for (let ch of s) {
    window[ch] = 0;
  }

  let match = 0;
  while (right < s.length) {
    let c1 = s[right];
    if (c1 in need) {
      window[c1]++;
      if (window[c1] === need[c1]) {
        match++;
      }
    }
    right++;
    while (match === Object.keys(need).length) {
      if (right - left === p.length) {
        res.push(left);
      }
      let c2 = s[left];
      if (c2 in need) {
        window[c2]--;
        if (window[c2] < need[c2]) {
          match--;
        }
      }
      left++;
    }
  }
  return res;
};

findAnagrams("cbaebabacd", 'abc');
