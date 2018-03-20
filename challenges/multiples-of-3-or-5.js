'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.
function test() {
  let sum = 0;
  const num = 10;

  for(let i = 1; i < num; i++){
    if(i%3 === 0 || i%5 === 0){
      sum += i;
    }
  }

  return sum;
}

function calc(num, limit){
  let start = limit;
  while(start%num){
    start--;
  }
  return (start + num) * Math.floor(start / num) / 2;
}

function sumMultiples3Or5Below1000() {
  // const num = 10;
  // // console.log(calc(15, num))
  // let sum = calc(5, num) + calc(3, num) - calc(15, num);
  //
  // return sum;
  test();
}



// console.log(test());
// console.log(sumMultiples3Or5Below1000())


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;

  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
