/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */
 
const divisors = (n) => {
  let out = [];
  let x = Math.floor(n/2);
  while (x > 0) {
    if(n % x  == 0){
      out.push(x)
    }
    x--;
  }
  return out;
}

console.log(divisors(20))

function gcd(a, b) {
  a = divisors(a);
  b = divisors(b);

  let res = a.filter((n) => { 
    return b.indexOf(n) >= 0;
  });
  
  res.concat(b.filter((n) => { 
    return res.indexOf(n) >= 0;
  }));
  return res[0];
}


gcd (12, 8) // 4

module.exports = gcd;