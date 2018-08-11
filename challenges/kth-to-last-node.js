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

const a = new Node('A');
  const b = new Node('B');
  const c = new Node('C');
  const d = new Node('D');
  const e = new Node('E');
 
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
	if (!head) return;

  let t1 = head; let t2 = head;

  while (k && t1) {
    
    t1 = t1.next;
    k-=1;
  }
  if (!t1) return;
  while (t1){
    t1 = t1.next;
    t2 = t2.next;
  }
  return t2.value;
}
console.log(kthToLastNode(1,a));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
