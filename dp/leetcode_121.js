/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 0) return 0;
  let dp = Array(prices.length).fill(0);
  let imin = prices[0];
  for (let i = 1; i < prices.length; i++) {
    dp[i] = Math.max(dp[i - 1], prices[i] - imin);
    imin = Math.min(prices[i], imin);
  }
  return dp[dp.length - 1];
};

maxProfit([7, 1, 5, 3, 6, 4]);