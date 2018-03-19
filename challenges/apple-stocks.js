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
// function bestProfit(s_p_y) {
//     if (!Array.isArray(s_p_y) || !s_p_y) return 0;
//     let min_spy = [...s_p_y].sort((a, b) => a - b);
//     let max_spy = [...s_p_y].sort((a, b) => b - a);
//     let possibleGains = [];
//     //check reutrn index of min
//     for (let i = 0; i < min_spy.length; i++) {
//         for (let j = 0; j < max_spy.length; j++) {
//             let min = min_spy[i];
//             let max = max_spy[j];
//             if (max === min) break;

//             let validTrans = s_p_y.indexOf(min) < s_p_y.indexOf(max);
//             let isProfit = max - min >= 0;
//             if (validTrans && isProfit) {
//                 possibleGains.push(max - min);
//             }
//         }
//     }
//     let maxProfit = Math.max(...possibleGains);

//     return maxProfit < 0 ? 0 : maxProfit;
// }

// const arr = 'sd';
// const arr1 = [6, 5, 1];
// const arr2 = [1, 5, 6, 0, 12];

// console.log(bestProfit(arr));
// console.log(bestProfit(arr1));
// console.log(bestProfit(arr2));

function bestProfit(spy) {
  // Validate input
  if(!Array.isArray(spy) || !spy || spy.length < 2) return 0;

  let maxP = 0;
  let lowB = spy[0];
  // Find max profit;
  spy.forEach(price => {
    if(price - lowB > maxP)  maxP = price - lowB;
    else if(price < lowB) lowB = price;
  });

  return maxP;
}

module.exports = bestProfit;
