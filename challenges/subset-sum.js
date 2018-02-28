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

	let subArr = array;
	subArr.sort(function(a,b) {return a-b});

	let value = null; 
	var checker = 0;
	
	for(let i = 0; i < subArr.length; i++){
	  if(i === target)
	    return true
	  value = subSet(i,0)
	}

 
	function subSet(i,sum){
	  let value = 0
      value = subArr[i]
      sum = value + sum
    if(sum === target){
	    checker = 1;
	    }
	  else if(sum > target){
	    return 0
	    }
	  else{ 
	    for(let k = i+1; k < subArr.length; k++){
	      subSet(k,sum);
	    }
	  }
	}
	
  if(checker === 1)
    return true; 
  return false; 
}