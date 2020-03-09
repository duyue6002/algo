/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  if (prices.length === 0) return 0;
  if (k >= prices.length / 2) return quickSolve(prices);
  let dp = Array(k + 1).fill(0);
  let imin = Array(k + 1).fill(prices[0]);
  for (let i = 1; i < prices.length; i++) {
    for (let j = 1; j <= k; j++) {
      imin[j] = Math.min(imin[j], prices[i] - dp[j - 1]);
      dp[j] = Math.max(dp[j], prices[i] - imin[j]);
    }
  }
  return dp[k];
};

var quickSolve = function(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
  }
  return profit;
};
