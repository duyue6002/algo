/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  let left = 0,
    right = S.length - 1;
  let arr = Array.from(S);
  while (left < right) {
    if (isLetter(arr[left]) && isLetter(arr[right])) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    } else {
      left += isLetter(arr[left]) ? 0 : 1;
      right -= isLetter(arr[right]) ? 0 : 1;
    }
  }
  return arr.join("");
};

var isLetter = function(ch) {
  return (ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z");
};
