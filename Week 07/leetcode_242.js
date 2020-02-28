/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  s = s
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
  t = t
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
  return s === t;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let counter = Array(123).fill(0);
  for (let i = 0; i < s.length; i++) {
    counter[s[i].charCodeAt()]++;
    counter[t[i].charCodeAt()]--;
  }
  return counter.every(x => x === 0);
};