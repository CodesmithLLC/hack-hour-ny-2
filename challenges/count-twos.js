// Write a function "countTwos" that takes a number as an argument, n.
// The function will return the number of 2s encountered when
// counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let result = 0;
  // const str = num.toString();

  for(let i = 2; i <= num; i++){
    const arr = i.toString().split('');
    arr.forEach(n => {
      if(n === '2'){
        result++;
      }
    })
  }
  // for each digit find largest num with two
  // swap where the two is and add the options to result

  // for(let i = 0; i < str.length; i++){
  //   const length = str.length - i - 1;
  //   let dig = parseInt(str[i], 10) * Math.pow(10, length);
  //   // if(dig)
  //
  //   while(!dig.toString().includes('2')){
  //     console.log(dig);
  //     dig--;
  //   }
  //
  // }

  return result;
}

// console.log(countTwos(1));
// console.log(countTwos(3));
// console.log(countTwos(13));
// console.log(countTwos(1000));
// console.log('');
// console.log(countTwos(11420));
// console.log(countTwos(9992));
// console.log(countTwos(992));
// console.log(countTwos(392));
// console.log(countTwos(20));

module.exports = countTwos;
