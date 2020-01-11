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

maxProfit([1, 2, 3, 0, 2]);
