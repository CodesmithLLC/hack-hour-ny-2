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
	// 9:30 open. Time is in minutes since open.
	// total time is length of array. Basically a giant ticker. 

	// loop through. Take smallest and largest

	let smallestP = null; 
	let largestP = 0;  

	for(let i = 0; i < stock_prices_yesterday.length; i++){
		if(smallestP === null)
			if(stock_prices_yesterday[i] > stock_prices_yesterday[i+1])
				largestP = stock_prices_yesterday[i]
			else
				smallestP = stock_prices_yesterday[i]	
		else if(stock_prices_yesterday[i] > largestP)
			largestP = stock_prices_yesterday[i]
		else if(stock_prices_yesterday[i] < smallestP)
			smallestP = stock_prices_yesterday[i]
		else if(stock_prices_yesterday[i] < 0)
			return 0; 
	} 

	let maxGain = largestP - smallestP; 

	if(maxGain === 0 || stock_prices_yesterday.length < 3)
		return 0;
	return maxGain; 

}

module.exports = bestProfit;
