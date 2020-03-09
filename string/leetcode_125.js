/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (isLegal(s[left]) && isLegal(s[right])) {
      let c1 = s[left].toLowerCase();
      let c2 = s[right].toLowerCase();
      if (c1 !== c2) {
        return false;
      }
      left++;
      right--;
    } else {
      left += isLegal(s[left]) ? 0 : 1;
      right -= isLegal(s[right]) ? 0 : 1;
    }
  }
  return true;
};

var isLegal = function(c) {
  return (
    (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || (c >= "0" && c <= "9")
  );
};
