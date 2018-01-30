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
  if (k<=0) return undefined;
  let node1 = head;
  for (let i=0; i<k-1; i++) {
    if (node1.next === null) return undefined;
    node1 = node1.next;
  }
  let node2 = head;
  while(node1.next !== null) {
    node1 = node1.next;
    node2 = node2.next;
  }
  return node2.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
