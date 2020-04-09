/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = Array();
  helper(result, "", n, 0, 0);
  return result;
};

var helper = function(result, str, n, left, right) {
  if (left === n && right === n) {
    result.push(str);
    return;
  }

  if (left < n) {
    helper(result, str + "(", n, left + 1, right);
  }

  if (right < n && right < left) {
    helper(result, str + ")", n, left, right + 1);
  }
};

generateParenthesis(3);
