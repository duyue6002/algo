/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let hashtable = {};
  for (let ch of s1) {
    if (hashtable[ch]) {
      hashtable[ch]++;
    } else {
      hashtable[ch] = 1;
    }
  }
  let window = {};
  for (let ch of s2) {
    window[ch] = 0;
  }
  let left = 0,
    right = 0,
    match = 0;
  while (right < s2.length) {
    let c1 = s2[right];
    if (c1 in hashtable) {
      window[c1]++;
      if (window[c1] === hashtable[c1]) {
        match++;
      }
    }
    right++;
    while (match === Object.keys(hashtable).length) {
      if (right - left === s1.length) {
        return true;
      }
      let c2 = s2[left];
      if (c2 in hashtable) {
        window[c2]--;
        if (window[c2] < hashtable[c2]) {
          match--;
        }
      }
      left++;
    }
  }
  return false;
};
