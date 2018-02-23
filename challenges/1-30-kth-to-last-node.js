/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

// return value of kth to last node
function kthToLastNode(k, head) {

// find length of the LL
  var currentNode = head;  // or head.next? (But, i think head is pointing at first node)
  var count = 0;
  var storage = {};

  while(currentNode !== null) {
    storage[count] = currentNode;   // storing each Node into our storage
    count++;
    currentNode = currentNode.next;

  }

  // count += 1; // to account for the last node, which didn't count up (didn't go into while loop)
      // nvm, changed the while loop condition

  // now count should be updated to the number of Nodes..
  
  var index = count - k;

  if(!head || k < 0 || !storage[index]) return undefined;

  return storage[index].value;

  // function checkIfValueExists(obj, key) {
  //   return obj.hasOwnProperty(key);
  // }

  // if (checkIfValueExists(currentNode, value)) {
  //   return currentNode.value;
  // } 

  // currentNode = head;   // reset the currentNode to first one
  // // get to the length - k + 1  Node (kth to last)
  // for (var i = 0; i < count - k; i++) {    // to get there, jump 'lengh - k' times from the first node
  //   currentNode = currentNode.next;
  // }

  // return currentNode.value;

// return Node.value

}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
