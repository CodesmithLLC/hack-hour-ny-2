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

function bestProfit(stock_prices_yesterday) {
// check if input is an array
  if (!Array.isArray(stock_prices_yesterday)) return 0;
// find the highest amount and the lowest amount that is before it
  let difference = 0;
  for (let i = 0; i < stock_prices_yesterday.length; i++) {
    for (let k = i+1; k < stock_prices_yesterday.length; k++) {
      let currDifference = stock_prices_yesterday[k] - stock_prices_yesterday[i];
      if (currDifference > difference) {
        difference = currDifference;
      }
    }
  }
  return difference;
}

module.exports = bestProfit;
