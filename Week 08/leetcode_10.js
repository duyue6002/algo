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
