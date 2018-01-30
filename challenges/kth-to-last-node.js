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
  let size = 0;
  let tempHead = head;

  if (head) {
    size = 1;

    while (tempHead.next) {
      size++
      tempHead = tempHead.next;
    }

    let end = size - k;
    let counter = 1;

    if (size === k) return head.value;
    if (k > size) return undefined;

    while (head.next) {
      if (counter === end) return head.next.value;

      counter++;
      head = head.next;       
    }
  }

  return undefined;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
