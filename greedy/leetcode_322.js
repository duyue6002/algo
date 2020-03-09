/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  return helper(coins, amount, new Array(amount + 1));
};

var helper = function(coins, rem, memo) {
  if (rem < 0) return -1;
  if (rem === 0) return 0;
  if (memo[rem]) return memo[rem];
  let imin = Number.MAX_SAFE_INTEGER;
  for (let coin of coins) {
    let res = helper(coins, rem - coin, memo);
    if (res >= 0 && res < imin) {
      imin = res + 1;
    }
  }
  memo[rem] = imin === Number.MAX_SAFE_INTEGER ? -1 : imin;
  return memo[rem];
};
