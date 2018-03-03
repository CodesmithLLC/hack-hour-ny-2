/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(prices) {
  if (!Array.isArray(prices) || !prices.length) return 0; 
  
  let buyPrice = prices[0], profit = 0, currentPrice;

  for (let i = 0; i < prices.length; i++) {
    currentPrice = prices[i];
    buyPrice = Math.min(buyPrice, currentPrice); // compare the current price to previous buy price, returning min of two to get lowest buy price out of array
    profit = Math.max(profit, currentPrice - buyPrice);  // max profit finding largest difference between current Price and buy price (lowest buy option)
  }
  
  return profit; 
}



module.exports = bestProfit;
