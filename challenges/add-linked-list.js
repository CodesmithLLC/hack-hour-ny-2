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
  if(!l2){
    return l1;
  }
  if(!l1){
    return l2;
  }

  let sum = l1.value + l2.value;
  const result = new Node(sum%10);
  let current = result;
  let carry = Math.floor(sum/10);

  let currentOne = l1.next;
  let currentTwo = l2.next;

  while(currentOne || currentTwo){
    if(currentOne && currentTwo){
      sum = currentOne.value + currentTwo.value;
      currentOne = currentOne.next;
      currentTwo = currentTwo.next;
    }
    else if(currentOne){
      sum = currentOne.value;
      currentOne = currentOne.next;
    }
    else if(currentTwo){
      sum = currentTwo.value;
      currentTwo = currentTwo.next;
    }

    current.next = new Node(sum%10 + carry);
    current = current.next;
    carry = Math.floor(sum/10);
  }

  return result;
}

// let l1 = new Node(2);
// l1.next = new Node(1);
// l1.next.next = new Node(5);
//
// let l2 = new Node(5);
// l2.next = new Node(9);
// l2.next.next = new Node(2);
//
// console.log(JSON.stringify(addLinkedList(l1, l2)));

module.exports = {Node: Node, addLinkedList: addLinkedList};
