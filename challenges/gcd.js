/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let arr = []
  let brr = []
  for (let i = 1; i <= a; i += 1){
    if (a % i === 0) {
      arr.push(i)
    }
  }
  for (let i = 1; i <= b; i += 1){
    if (b % i === 0) {
      brr.push(i)
    }
  }
 console.log(arr)
 console.log(brr)
  for (let i = arr.length -1; i >= 0; i -= 1) {
    if (brr.indexOf(arr[i]) !== -1) {
      return arr[i]
    }
  }
}

module.exports = gcd;