// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

// 4-16

// function commonElements(array1, array2, array3, array4){

// }

function commonElements(arr1, arr2, arr3, arr4) {
  // method , O(n) time, n is the sum of all arr.length
  // const allcount = {}; key - can be str or numberStr
  // value - obj1 with property number and string
  // obj1.number/obj2.string - array contains arrIdx which contains the key, ex: array = [1,3,4]
  const allcount = {};
  for (let i = 0; i < 4; i++) {
    let arr = arguments[i];
    arr.forEach((el) => {
      const type = typeof el;
      if (!allcount[el]) allcount[el] = {};
      if (!allcount[el][type]) allcount[el][type] = [];
      allcount[el][type].push(i)
    });
  }
  return checkCommon(allcount);
}

function checkCommon(allcount) {
  const result = [];
  let flags;
  for (let key in allcount) {
    if (allcount[key].string) {
      flags = [false, false, false, false];
      for (let idx of allcount[key].string) {
        flags[idx] = true;
      }
      if (flags[0] && flags[1] && flags[2] && flags[3]) result.push(key);
    }
    if (allcount[key].number) {
      flags = [false, false, false, false];
      for (let idx of allcount[key].number) {
        flags[idx] = true;
      }
      if (flags[0] && flags[1] && flags[2] && flags[3]) result.push(Number(key));
    }
  }
  if (result.length === 0) return;
  return result;
}


module.exports = commonElements;
