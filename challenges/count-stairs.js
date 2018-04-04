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
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

function countStairs(n) {
  const record = {};
  function combinations(curr, left){
    if(!left.length){
      record[curr] = true;
    }

    left.forEach((num, i) => {
      combinations(curr + num, left.slice(0, i).concat(left.slice(i + 1)));
    })
  }

  const start = [...new Array(n)].map((i) => "1");
  combinations("", start);

  let done = false;
  while(!done){
    start.splice(start.indexOf("1"), 2, "2");
    combinations("", start);
    done = start.length === Math.ceil(n/2);
  }

  return Object.keys(record)
}

console.log(countStairs(5));

module.exports = countStairs;
