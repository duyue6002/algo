/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let map = Array(123).fill(0);
  for (let i = 0; i < s.length; i++) {
    map[s.charCodeAt(i)]++;
  }
  for (let i = 0; i < t.length; i++) {
    map[t.charCodeAt(i)]--;
  }
  return map.every(x => x === 0);
};
