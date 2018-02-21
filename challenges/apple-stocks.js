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
const arr = [1,2,6,4,9,3,9,12,6,3,0];

function bestProfit(stock_prices_yesterday) {
	
	if (!Array.isArray(stock_prices_yesterday)) return 0;
	let lowPrice = stock_prices_yesterday[0];
	let highPrice = stock_prices_yesterday[0];


	stock_prices_yesterday.forEach((price) => {
		if (price < lowPrice) lowPrice = price;
		if (price > highPrice) highPrice = price;

	})

	if (lowPrice < highPrice) return highPrice - lowPrice;
	else return 0;

}

//console.log(bestProfit(arr))

module.exports = bestProfit;
