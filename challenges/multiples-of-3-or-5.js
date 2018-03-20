'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  sum += (3+999)*333/2;
  sum += (5+995)*199/2;
  sum -= (15+990)*66/2;
  return sum;
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  const nx = Math.floor((z-1)/x);
  const ny = Math.floor((z-1)/y);
  const nxy = Math.floor((z-1)/lcm(x,y));
  sum += (x+x*nx)*nx/2;
  sum += (x+x*ny)*ny/2;
  sum -= (x+x*nxy)*nxy/2;
  console.log(x,y,z,sum)
  return sum;
}

function lcm(x,y) {
  return x*y/gcd(x,y);
}

function gcd(a,b) {
  if (a%b === 0) return b;
  if (b%a === 0) return a;
  let d = (a>b) ? b   : a;
  let c = (a>b) ? a%b : b%a;
  return gcd(d, c);
}


const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
