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
// 4-09

// function pascalTriangle(numRows) {

// }

// CSmith Erik
// Recursive
function pascalTriangle(n, triangle) {
  if (!n || n < 1) return [];

  // this line handles the initial call which may not pass in a triangle
  triangle = triangle || [[1]];

  // base case : n is 1. Return whatever our triangle is at that point.
  if (n < 2) return triangle;

  // recursive case:
  var row = [1];
  var prevRow = triangle[triangle.length - 1];

  for (var i = 1; i < prevRow.length; i++) {
    row.push(prevRow[i] + prevRow[i - 1]);
  }

  row.push(1);
  triangle.push(row);

  // at the end of the recursive case, make the recursive call with n - 1
  // keep in mind, n is only used as a counter. we build from triangle, which
  // will start from [[1]]
  return pascalTriangle(n - 1, triangle);
}

// Iterative
function pascalTriangle(numRows) {
  // declare output variable
  const triangle = [];

  // handle edge cases
  if (numRows < 1 || !numRows) return triangle;

  // for loop using numRows
  for (let i = 0; i < numRows; i++) {
    // cases for 1 row
    if (i === 0) triangle.push([1]);

    // else add previous rows together to get next row
    else {
      triangle[i] = [1];
      triangle[i - 1].forEach((num, idx) => {
        triangle[i].push(num + (triangle[i - 1][idx + 1] || 0));
      });
    }
  }
  // return output
  return triangle;
}

module.exports = pascalTriangle;
