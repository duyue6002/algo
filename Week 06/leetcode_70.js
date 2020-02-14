/**
 *
 * @param {number} n
 * @returns {number}
 */
var climbStairs = function(n) {
  let memo = Array(n + 1).fill(0);
  memo[1] = 1;
  memo[2] = 2;
  return helper(memo, n);
};

/**
 *
 * @param {number[]} memo
 * @param {number} n
 */
var helper = function(memo, n) {
  if (n <= 0) return 0;
  if (!!memo[n]) return memo[n];
  memo[n] = helper(memo, n - 1) + helper(memo, n - 2);
  return memo[n];
};
