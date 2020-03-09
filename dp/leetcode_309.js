/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buy = Array(prices.length + 1).fill(0),
    sell = Array(prices.length + 1).fill(0),
    reset = Array(prices.length + 1).fill(0);
  buy[0] = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i <= prices.length; i++) {
    let price = prices[i - 1];
    buy[i] = Math.max(buy[i - 1], reset[i - 1] - price);
    sell[i] = Math.max(sell[i - 1], buy[i - 1] + price);
    reset[i] = Math.max(sell[i - 1], buy[i - 1], reset[i - 1]);
  }
  return sell[sell.length - 1];
};

var maxProfit = function(prices) {
  let sell = 0,
    prev_sell = 0,
    buy = Number.MIN_SAFE_INTEGER,
    prev_buy;
  for (let price of prices) {
    prev_buy = buy;
    buy = Math.max(prev_sell - price, prev_buy);
    prev_sell = sell;
    sell = Math.max(prev_buy + price, prev_sell);
  }
  return sell;
};

/**
 *
 * @param {number[]} prices
 * @returns {number}
 */
var maxProfit = function(prices) {
  let dp = Array.from(Array(prices.length + 2), () => Array(2).fill(0));
  dp[0][0] = dp[1][0] = 0; // 当前不持有股票，下一步可以买入，利润为0
  dp[0][1] = dp[1][1] = Number.MIN_SAFE_INTEGER; // 开始时不可能持有股票，改情况不可能
  for (i = 2; i <= prices.length + 1; i++) {
    let price = prices[i - 2];
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + price);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - price);
  }
  return dp[dp.length - 1][0];
};

maxProfit([1, 2, 3, 0, 2]);
