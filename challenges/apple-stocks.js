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
  const p = stock_prices_yesterday;
  if (!Array.isArray(p) || p.length === 0) return 0;
  let min = p[0];
  let max = p[0];
  for (let i=1; i<p.length; i++) {
    if(p[i]>max) max = p[i];
    if(p[i]<min) min = p[i];
  }
  return max-min;
}

module.exports = bestProfit;
