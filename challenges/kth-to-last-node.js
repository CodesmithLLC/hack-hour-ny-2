/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 ; -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let stack = [];
  let current = head;
  while(current !== null){
    stack.push(current.value);
    current = current.next;
  }

  const index = stack.length - k;
  return (index >= 0) ? stack[index] : undefined;
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(5, a))

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
