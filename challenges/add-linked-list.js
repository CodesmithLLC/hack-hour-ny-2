/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
	// if digit is > 1 in length, take left side and add it to right node
	// assuming same length, example does not have multiple lengths 
	//

	let sumArr = []; 
	placeholder;

	while(l1.next !== null && l2.next !== null ){
		let sumVal; 
		sumVal = l1.value + l2.value + placeholder; 

		if(String(sumVal).length > 1){
			sumArr.push(Number(sumVal.charAt[0])); 
			placeholder = Number(sumVal.charAt[1]);
		} else {
			sumArr.push(sumVal)
		}
	}

	let newll = new Node(sumArr[0]);

	for(let i = 1; i < sumArr.length; i++){
		newll.next = new Node(sumArr[i])
	} 

	return newll
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
