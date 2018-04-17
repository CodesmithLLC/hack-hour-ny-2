/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  if(numRows < 1) return;
  const result = [[1]];
  if(numRows < 2) return result;

  result.push([1,1]);
  let prevRow = result[1];

  for(let i = 2; i < numRows; i++){
    const newRow = [1];
    for(let j = 0; j < prevRow.length - 1; j++){
      newRow.push(prevRow[j] + prevRow[j + 1]);
    }
    newRow.push(1);
    result.push(newRow);
    prevRow = newRow;
  }

  return result;
}

console.log(pascalTriangle(6));

module.exports = pascalTriangle;
