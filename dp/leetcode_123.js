/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 0) return 0;
  let dp = Array.from(Array(3), () => Array(prices.length).fill(0));
  for (let k = 1; k < 3; k++) {
    for (let i = 1; i < prices.length; i++) {
      let imin = prices[0];
      for (let j = 1; j <= i; j++) {
        imin = Math.min(imin, prices[j] - dp[k - 1][j - 1]);
      }
      dp[k][i] = Math.max(dp[k][i - 1], prices[i] - imin);
    }
  }
  return dp[2][prices.length - 1];
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 0) return 0;
  let dp = Array.from(Array(3), () => Array(prices.length).fill(0));
  let imin = Array(3).fill(prices[0]);
  for (let i = 1; i < prices.length; i++) {
    for (let k = 1; k < 3; k++) {
      imin[k] = Math.min(imin[k], prices[i] - dp[k - 1][i - 1]);
      dp[k][i] = Math.max(dp[k][i - 1], prices[i] - imin[k]);
    }
  }
  return dp[2][prices.length - 1];
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 0) return 0;
  let dp = Array(3).fill(0);
  let imin = Array(3).fill(prices[0]);
  for (let i = 1; i < prices.length; i++) {
    for (let k = 1; k < 3; k++) {
      imin[k] = Math.min(imin[k], prices[i] - dp[k - 1]);
      dp[k] = Math.max(dp[k], prices[i] - imin[k]);
    }
  }
  return dp[2];
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 0) return 0;
  let onebuy = prices[0],
    onesell = 0,
    twobuy = prices[0],
    twosell = 0;
  for (let i = 1; i < prices.length; i++) {
    onebuy = Math.min(onebuy, prices[i]);
    onesell = Math.max(onesell, prices[i] - onebuy);
    twobuy = Math.min(twobuy, prices[i] - onesell);
    twosell = Math.max(twosell, prices[i] - twobuy);
  }
  return twosell;
};
