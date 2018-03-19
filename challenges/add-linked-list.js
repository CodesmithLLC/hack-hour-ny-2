/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

// let a = new Node(2);
// a.next = new Node(1);
// a.next.next = new Node(8);
// a.next.next.next = new Node(2);

// let b = new Node(5);
// b.next = new Node(9);
// b.next.next = new Node(2);

// console.log(addLinkedList(a,b).next.next);

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  // need to keep track of the previous to carry the value
  if(!l1) return l2;
  if(!l2) return l1;

  let resH, res,
    carry = 0,
    a = l1,
    b = l2,
    sum = a.value + b.value;

  if(sum > 9) {
    sum -= 10;
    carry = 1;
  }

  resH = res = new Node(sum);

  while(a.next && b.next) {
    a = a.next;
    b = b.next;
    sum = a.value + b.value + carry;
    carry = 0;

    if(sum > 9) {
      sum -= 10;
      carry = 1;
    }

    res.next = new Node(sum);
    res = res.next;
  }

  if(!a.next && b.next) {
    b.next.value += carry;
    res.next = b.next;
  }
  else if (!b.next && a.next) {
    a.next.value += carry;
    res.next = a.next;
  }

  return resH;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
