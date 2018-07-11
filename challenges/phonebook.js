/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2: 
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook 
* complete with methods to add new names and look up and remove existing entries
*/
const jazbook = [
     ['alex','301-844-3421', '123 cool st'],
     ['jae','301-844-1211', '456 boring rd'],
     ['david','301-844-0978', '789 7th heaven'],
     ['travis','301-844-8505', '246 dude hwy'],
     ['jasmine','1800-974-4539', '135 yup ave'],
  ];

//  return the number associated with the name in the jazbook
const findNumber = (jazbook, name) => {
	for (let i = 0; i < jazbook.length; i++){
		if (jazbook[i][0] === name) return jazbook[i][1];
	}
	return false;
}

const memoize = (func, mem = {}) => {
	return (data, id) => {
		!mem[id] ? mem[id] = func(data, id) : console.log('in memory...');
		return mem[id];
	} 
}

const memoizedJazbookNumbers = memoize(findNumber)


console.log(memoizedJazbookNumbers(jazbook, 'jae'))
console.log(memoizedJazbookNumbers(jazbook, 'alex'))
console.log(memoizedJazbookNumbers(jazbook, 'david'))
console.log(memoizedJazbookNumbers(jazbook, 'david'))
console.log(memoizedJazbookNumbers(jazbook, 'nate'))


// return an object literal representing the jazbook

function Jazbook(array){
  this.phonebook = {};
  array.forEach((individual) => {
    this.phonebook[individual[0]]=individual[1];
  });
};

Jazbook.prototype.add = function(name, number) {
  this.phonebook[name] = number;
}

Jazbook.prototype.lookup = function(name) {
  return this.phonebook[name];
}

Jazbook.prototype.remove = function(name) {
  delete this.phonebook[name];
}

const makePhoneBookObject = new Jazbook(jazbook);

makePhoneBookObject.add('todd','555-555-5555')

console.log(makePhoneBookObject)

const objectToExport = {
  findNumber,
  makePhoneBookObject,
};

module.exports = objectToExport;
