// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {

  let twos = {2:0};
  
  for(let i = 1; i<= num; i++){
    let str = i.toString().split('');
    console.log(str)
    for(var n of str){
      if (n === '2'){
        twos[2] += 1
      }
    }
  }

  return twos[2];
  
}


// countTwos(23)

module.exports = countTwos;