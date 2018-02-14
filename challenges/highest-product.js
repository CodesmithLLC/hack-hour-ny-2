/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 function highestProduct(array) {
   if (array.length === 0) return 0; 
   if (array.length <= 3) {
     return array.reduce((a, b) => {
       return a * b;
     });
   }

   let hiNum = Math.max(array[0], array[1]);
   let loNum = Math.min(array[0], array[1]);

   let highestOfThree = array[0]*array[1]*array[2];
   let highestOfTwo = array[0]*array[1];
   let lowestOfTwo = array[0]*array[1];

   let i = 2;

   while (i < array.length) {
     highestOfThree = Math.max(
       highestOfTwo * array[i],
       lowestOfTwo * array[i],
       highestOfThree
     );

     highestOfTwo = Math.max(
       hiNum * array[i],
       highestOfTwo
     )

     lowestOfTwo = Math.min(
       loNum * array[i],
       lowestOfTwo
     )

     hiNum = Math.max(hiNum, array[i]);

     loNum = Math.min(loNum, array[i]);

     i++;
   }
   return highestOfThree;
 }


module.exports = highestProduct;
