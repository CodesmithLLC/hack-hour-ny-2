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

function kthToLastNode(k, head) {
  let counter = 1;
  // base case is -- does this element contain the value or next === null?
  function inner() {
    let nextNode = head;
    while (nextNode.next !== null) {
      counter += 1;
      nextNode = nextNode.next;
    }
  }
  inner();
  const resultIndex = counter - k + 1;
  counter = 1;
  let rNode = head;
  while (counter < resultIndex) {
    counter += 1;
    rNode = rNode.next;
  }
  return rNode.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
