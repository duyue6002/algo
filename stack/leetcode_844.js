/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  return helper(S) === helper(T);
};

var helper = function (s) {
  let stack = [];
  for (let c of s) {
    if (c !== "#") {
      stack.push(c);
    } else {
      stack.pop();
    }
  }
  return stack.join("");
};
