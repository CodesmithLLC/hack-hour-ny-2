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

function bestProfit(s_p_y) {
  
  if (!Array.isArray(s_p_y) || !s_p_y.forEach((item) => {if (isNaN(item)) return false} )) {
    return 0
  }
  let absoluteMax = 0;
  for (let i = 0; i < s_p_y.length; i += 1) {
    let tempMax = 0;
    for (let j = i; j < s_p_y.length; j += 1) {
      if (s_p_y[j] - s_p_y[i] > tempMax) { 
        tempMax = s_p_y[j] - s_p_y[i]
      }
    }
    if (tempMax > absoluteMax) {
      absoluteMax = tempMax;
    }
  }
  return absoluteMax;
}

// Version that provided profit, buy time, and sell time
function bestProfit2(s_p_y) {
  if (!Array.isArray(s_p_y) || !s_p_y.forEach((item) => {if (isNaN(item)) return false} )) {
    return 0
  };
  
  let absoluteMax = { profit: 0,
                     buy: null,
                     sell: null
                    };           
                     
  for (let i = 0; i < s_p_y.length; i += 1) {
    let tempMax = { profit: 0,
                    buy: null,
                    sell: null
                  } ;
    for (let j = i; j < s_p_y.length; j += 1) {
      if (s_p_y[j] - s_p_y[i] > tempMax.profit) { 
        tempMax.profit = s_p_y[j] - s_p_y[i];
        tempMax.buy = i;
        tempMax.sell = j
      }
    }
    if (tempMax.profit > absoluteMax.profit) {
      absoluteMax = tempMax;
    }
  }
  return absoluteMax;
}

module.exports = bestProfit;
