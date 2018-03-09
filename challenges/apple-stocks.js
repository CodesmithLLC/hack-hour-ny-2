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
	// input: an array of prices for every min in day (1440 mins)
	// output: difference between high and low in array
 
	// Return 0 if input is invalid
	if (!Array.isArray(stock_prices_yesterday) || !stock_prices_yesterday.length) return 0;

	// the buying index needs to be before the selling index
	// Can we find the maxProfit with one for loop? If so, what kind of data would we need to save and update when running through our array?

	// store the low price as the first in the array
	let low = stock_prices_yesterday[0], high = null, nextPrice;

	//console.log('start low', low)

	// stock_prices_yesterday.forEach((price, index, array) => {
	// 	//console.log('low', index, low)
	// 	// if (index < array.length - 1) nextPrice = array[index + 1]
	// 	// if (price < low && nextPrice > ) low = price;
	// 	// if (nextPrice > low && high === null) {
	// 	// 	high = nextPrice;
	// 	// }
	// 	// if (nextPrice > high && high !== null) high = nextPrice;
	// 	// //console.log('high', index, high)

	// 	// start with first as low, next price has to be higher to set the high
	// 	// 

	// 	console.log(high)
	// 	console.log(low)
	// })

	let max = Math.max(...stock_prices_yesterday);
	let min = Math.min(...stock_prices_yesterday);

	//if (stock_prices_yesterday.charAt(max))
		return (stock_prices_yesterday.indexOf(max))


	//return high - low;

	// Return 0 if no profit is possible

}

const arr1 = [10, 7, 5, 8, 11, 9, 1] // -> max profit is 6
const arr2 = [] // -> max profit is 0
const bad = 'string'; // -> max profit is 0
console.log(bestProfit(arr1));

module.exports = bestProfit;
