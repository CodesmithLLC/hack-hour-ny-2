/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

ffunction isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;

}

function stringRotation(s1, s2) {
	// rotating string along axis. 
	// is Substring is used to find false or true values of the inputted substring. 
	// find position at which the initial letters are different. 
	let differentSegment = ""; 
	let startSegment = "";
	let reversedSegment = null; 
	let unrotatedString = "";
	
  if(s1 === s2)
    return true;
    
  if(s1.length !== s2.length)
    return false;
    
	function segmentBreaker(str1,str2){
	  for(let i = 0; i < str1.length; i++){
	      if(str1[i] !== str2[i]){
	        differentSegment += str2.charAt(i);
	       // reversedSegment = differentSegment.split('');
	       // reversedSegment.reverse(); 
	       // differentSegment = reversedSegment.join('');
	      }
	      
	        if(str1.indexOf(differentSegment) < 0){
	          startSegment += str2.charAt(i);
	        }
	        
	       // reversedSegment = differentSegment.split('');
	       // reversedSegment.reverse(); 
	       // differentSegment = reversedSegment.join('');
	     // return [differentSegment,startSegment];
	  }
	  
	  let ignoreLength = startSegment.length;
	  differentSegment = differentSegment.slice(0,differentSegment.length - ignoreLength);
	}  
	
		
  segmentBreaker(s1,s2);
  unrotatedString = startSegment + differentSegment;
  
  if(s1 === unrotatedString)
    return true; 
  else
    return false; 
  
  // if(isSubstring(s1, differentSegment[0]) && s1.length === differentSegment[0].length)
  //   return true;
  // else 
  //   return false;
}


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
