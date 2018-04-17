/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable, result=0) {
  // console.log(result);

  if(!items.length || !weightAvailable){
    return result;
  }

  if(items[0].weight <= weightAvailable){
    return Math.max(solveKnapsack(items.slice(1), weightAvailable, result), solveKnapsack(items.slice(1), weightAvailable - items[0].weight, result + items[0].value));
  }
  else {
    return solveKnapsack(items.slice(1), weightAvailable, result);
  }
};

const items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
console.log(solveKnapsack(items, 3));
console.log(solveKnapsack(items, 5));

module.exports = solveKnapsack;
