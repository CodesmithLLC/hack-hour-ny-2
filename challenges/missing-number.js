/*
A zero-indexed array A consisting of N different integers is given.
The array contains integers in the range [1..(N + 1)], which means
that exactly one element is missing.Your goal is to find that missing element.
Write a function that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Assume that:
 * N is an integer within the range [0..100,000];
 * the elements of A are all distinct;
 * each element of array A is an integer within the range [1..(N + 1)].
 Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).

Challange:
  ** cannot use additional storage, variables are okay not any TYPE of object
  ** keep in mind time complexity
*/
function missingNum(array) {
  // sort array in place and and check if previous number is exactly one less than previous number
  // orrrrrrr find what the total of numbers should be and subtract the numbers - the result is either 0 or the missing number
  // 5+4+3+2+1 = 15, 2+3+1+5 = 11, 15 - 11 = 4, the missing number BUT this is the worst case time & space complexity...
  let largest = array[0];
  let arrTotal = array.reduce((acc, num) => {
    if (num > largest) largest = num;
    return acc + num;
  }, 0);

  let total = 0;
  for (let i = 1; i <= largest; i++) {
    total += i;
  }
  return total - arrTotal;
}

module.exports = missingNum;
