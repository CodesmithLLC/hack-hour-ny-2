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
  const nodeObj = {};
  let next = head.next;
  let i = 0;
  while(next !== null) {
    nodeObj[i]= next.value;
    i += 1;
    next = next.next; //rename
  }
  // return nodeObj[i-k];
  return (!nodeObj.hasOwnProperty(i-k))? undefined : nodeObj[i-k];
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
