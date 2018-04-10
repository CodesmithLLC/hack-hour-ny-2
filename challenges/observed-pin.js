/*
Alright, detective, one of our colleagues successfully observed our target person, Robby the robber.
We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to
this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the
PIN he saw, when Robby entered it.

The keypad has the following layout:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually
be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it
could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they
never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

* possible in sense of: the observed PIN itself and all variations considering the adjacent digits

Can you help us to find all those variations? It would be nice to have a function, that returns an array
of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs.
But please note that all PINs, the observed one and also the results, must be strings, because of
potentially leading '0's. Don't worry about the order of the array.

Detective, we count on you!

expectations = {
  "8": ["5", "7", "8", "9", "0"],
  "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
  "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"],
}

*/




function getPINs(observed) {
  const matrix = [];
  matrix[0] = ["8","0"];
  matrix[1] = ["2","4","1"];
  matrix[2] = ["1","3","5","2"];
  matrix[3] = ["2","6","3"];
  matrix[4] = ["1","5","7","4"];
  matrix[5] = ["2","4","6","8","5"];
  matrix[6] = ["3","5","9","6"];
  matrix[7] = ["4","8","7"];
  matrix[8] = ["0","5","7","9","8"];
  matrix[9] = ["6","8","9"];
  if (observed.length===1) return matrix[observed];
  const sets = [];
  for (let i=0;i<observed.length;i++) {
    sets.push(matrix[observed[i]]);
  }
  const all = [];
  const combinedarr = cartesinoProduct(sets);
  combinedarr.forEach(function(combination) {
    let s = combination.join("");
    if (!all.includes(s)) all.push(s);
  });
  return all;
}

function cartesinoProduct(arr) {
  if (arr.length === 1)
    return arr;
  if (arr.length === 2) {
    const arrProduct = [];
    const a1 = arr[0];
    const a2 = arr[1];
    for (let i=0; i<a1.length; i++) {
    	for (let j=0; j<a2.length; j++) {
        arrProduct.push([].concat(a1[i],a2[j]));
      }
    }
    return arrProduct;
  }
  const last = arr[arr.length-1];
  const beforeLast = arr.slice(0,arr.length-1);
 	const s = cartesinoProduct(beforeLast);
  return cartesinoProduct([s,last]);
}

module.exports = getPINs
