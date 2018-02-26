// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// ([)]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true - done. 

function matchWord(str) {
	let newStr = "";
	let newObj = {}; 
	let counter = 0; 
  
	if(str.length === 0)
		return true; 
	
	for(i = 0; i < str.length; i++){
		if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90 || str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
			newStr += str[i]; 
		}
		else {
		  newObj[i] = newStr; 
		  newStr = "";
		}
	} // making the Obj
	
	for(let clean in newObj){
	  if(newObj[clean] === null || newObj[clean] === undefined || newObj[clean] === "")
	    delete newObj[clean];
	}	// cleaning for null / empty
	
	
	// looping through. Making the array 	
	let newArr = []; 
  for(let key in newObj){
    newArr.push(newObj[key])
  }
  
  for(let i = 0; i < newArr.length; i++){
    for(let j = i+1; j < newArr.length; j++){
      let reversed = newArr[j].split("").reverse().join("")
      if(newArr[i] === reversed || newArr[i].toUpperCase() === reversed || newArr[i] === reversed.toUpperCase())
        counter++; 
    } 
  } // checking 
    if(counter === newArr.length)
      return true; 
  return false; 
}

module.exports = matchWord;
