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
  let current1 = l1;
  let current2 = l2;
  let l3 = new Node(l1.value);
  l3.next = new Node(l2.value);
  let current3 = l3;

  current1 = current1.next;
  current2 = current2.next;
  current3 = current3.next;

  while (current1 && current2) {
    current3.next = new Node(current1.value);
    current3 = current3.next;
    current3.next = new Node(current2.value);
    current3 = current3.next;
    current1 = current1.next;
    current2 = current2.next;
   }
   
  return l3;
};

module.exports = {Node: Node, zip: zip};
