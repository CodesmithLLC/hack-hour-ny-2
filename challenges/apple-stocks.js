/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 930am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 1030am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(stock_prices_yesterday) {

  if(!Array.isArray(stock_price_yesterday) || stock_prices_yesterday.length === 0) return 0;
  let lowPrice = stock_prices_yesterday[0];
  let highPrice = stock_prices_yesterday[0];

  for(let i of stock_prices_yesterday) {
    if(i < lowPrice) lowPrice = i;
    if(i > highPrice) highPrice = i;
  }

  // if(lowPrice < highPrice) return highPrice - lowPrice;
  // else return 0;
}

module.exports = bestProfit;
