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
  if (!l1.next) return l2;
  if (!l2.next) return l1;

  let curr1 = l1, 
      curr2 = l2,
      temp1 = curr1.next,
      temp2 = curr2.next;

  while (curr1.next && curr2.next) {
    curr1.next = curr2;
    curr2.next = temp1;
    curr1 = temp1;
    temp1 = curr1.next;
    curr2 = temp2;
  }

  return l1;
}

module.exports = {Node: Node, zip: zip};
