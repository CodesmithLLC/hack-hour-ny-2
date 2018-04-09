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
  function genRow(n) {
    if (n===1) return [1];
    if (n===1) return [1,1];
    const result = [1];
    const preRow = genRow(n-1);
    for (let i=0; i<n-2; i++) {
      result.push(preRow[i] + preRow[i+1])
    }
    result.push(1);
    return result;
  }
  const pT = [];
  for(let i=1; i<=numRows; i++) {
    pT.push(genRow(i));
  }
  return pT;
}

module.exports = pascalTriangle;
