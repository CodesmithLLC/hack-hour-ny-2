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
  let min = {value:p[0], idx:0};
  let max = {value:p[0], idx:0};
  let result = 0;
  for (let i=0; i<p.length-1; i++) {
    for (let j=i+1; j<p.length; j++) {
      if (p[j]-p[i] > result) result = p[j]-p[i];
    }
  }
  return result;
}

module.exports = bestProfit;
