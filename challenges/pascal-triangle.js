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

function pascalTriangle(numRows, arr = [[1]]) {
  if (numRows <= 0) return [];
  if (numRows === 1) return arr;

  const row = [1]
  const prev = arr[arr.length-1]

  for (let i = 0; i < prev.length-1; i++){
    row.push(prev[i] + prev[i+1])
  }

  row.push(1)
  arr.push(row)
  return pascalTriangle(numRows-1, arr);
}

console.log(pascalTriangle(2))

module.exports = pascalTriangle;
