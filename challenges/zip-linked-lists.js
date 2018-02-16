/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */



function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {

	let arrayValue1 = [];  
	let arrayValue2 = []; 
	let mergedValueArr = [];
	let newObj;  


	if(arrayValue1.length > arrayValue2.length)
		let length = arrayValue1.length;
	else
		let length = arrayValue2.length; 

	function linkedList(node){
		if(this.next === null)
			return; 
		else
			let value = this.value; 
			arrayValue1.push(value);
			linkedList(this.next); 
	}

	linkedList(l1);

		function linkedList2(node){
		if(this.next === null)
			return; 
		else
			let value = this.value; 
			arrayValue2.push(value);
			linkedList2(this.next); 
	}

	linkedList(l2);

	for(let i = 0; i < length; i++){
		mergedValueArr.push(arrayValue1[i]);
		mergedValueArr.push(arrayValue2[i]);
	}

	for(let i = 0; i < mergedValueArr.length; i++){
		if(newObj)
			newObj.next = new Node(mergedValueArr[i])
		newObj = new Node(mergedValue[i]);
	}

	return newObj 
};

module.exports = {Node: Node, zip: zip};
