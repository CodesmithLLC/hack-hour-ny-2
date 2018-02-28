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

function reverseLL(head) {
  if (!head || !head.next) return head;
  
  let prev = null, curr = head, next;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  
  head = prev; // prev is the last truthy node
  return head; 
}


module.exports = {Node: Node, zip: zip};
