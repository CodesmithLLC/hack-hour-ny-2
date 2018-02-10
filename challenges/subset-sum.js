/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {

	let subArr = array.filter(number) => target > number; 
	return array; 

}

module.exports = subsetSum;

function subsetSum(array, target) {

	let subArr = array.filter(number => (target >= number)); 
	subArr.sort(function(a,b) {return a-b});
	console.log(subArr)
	
	let value = null; 
	
	for(let i = 0; i < subArr.length; i++){
	  if(i === target)
	    return true;
	   value = subSet(i);
	}

	function subSet(i){
	  let value = 0; 
      for(let j = i; j < subArr.length; j++){
        value = subArr[j]
	    if(value === target)
	       return value; 
	    else if(value > target)
	      return 0; 
	    else{ 
	      i = i + 1 
	      value = value + (subSet(i));
	      console.log(value)
	   }
	   return value; 
    }
	}
	
  if(value === target)
    return true; 
  return false; 
}

