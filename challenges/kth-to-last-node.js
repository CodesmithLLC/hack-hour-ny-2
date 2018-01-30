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
  this.back = null;
}

function kthToLastNode(k, head) {
  let current = head;
  let count = 1;
  let storage = {};

  while (current) {
    storage[count] = current.value;
    count++;
    current = current.next;
  }
  return storage[count - k];
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};


// function kthToLastNode(k, head) {
//   let current = head;
//   let count = 1;

//   while (current.next) {
//     count++;
//     current = current.next;
//   }
//   current = head;
//   for (let i = 0; i < count - k + 1; i++) {
//     if (i === count - k) return current.value;
//     current = current.next;
//   }
// }