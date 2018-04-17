/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {
  if (item.length === 0 || weightAvailable<=0) return 0;
  if (item.length === 1) {
    if (item[0].weight > weightAvailable) return 0;
    return item[0].value;
  }
  const takeIt = solveKnapsack(item.slice(1), weightAvailable-item[0].weight) + item[0].value;
  const notTakeIt = solveKnapsack(item.slice(1), weightAvailable);
  return Math.max(takeIt, notTakeIt);
}

module.exports = solveKnapsack;
