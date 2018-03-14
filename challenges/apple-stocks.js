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
  let stock = stock_prices_yesterday;
  if(!Array.isArray(stock) || !stock.length){
    return 0;
  }

  let min = stock[0];
  let max = stock[0];
  let profit = 0;

  for(let i = 1; i < stock.length; i++){
    if(stock[i] < min){
      min = stock[i];
    }
    else if(stock[i] > max){
      max = stock[i];
      profit = Math.max(profit, max - min);
    }
  }

  return Math.max(profit, 0);
}

let stocks = [];
for(let i = 0; i < 4; i++){
  stocks.push(Math.round(Math.random() * 100));
}

// console.log(stocks);
// console.log(bestProfit(stocks));

module.exports = bestProfit;
