/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 * 1 + 1 + 3
 * 1 + 3 + 1
 * 3 + 1 + 1
 * 3 + 2
 * 2 + 3
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

function countStairs(n, mem, array) {
	if (n < 2) return 1;
	if (mem[n]) return mem[n];
	let total = 0;
	for (let i = 0; i < array.length; i++){
		total += n-array[i] >= 0 ? countStairs(n-array[i], mem, array) : 0;
	}
	mem[n] = total;
	return mem[n];
}
console.log(countStairs(5,{},[1,2,3]))

module.exports = countStairs;
