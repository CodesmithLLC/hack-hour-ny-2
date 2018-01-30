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
  let count = 0;
  let current = head;
  let element = null;

  while (current !== undefined) {
    console.log(current)
    count += 1
    if (current.next !== null){
      current = current.next
      
    }
    else {
      current = undefined
    }  
  }
  if (k > count) {
    return undefined;
  }
  current = head;
  for (let i = 0; i < count - k; i += 1){
    current = current.next
  }
  return current.value
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
