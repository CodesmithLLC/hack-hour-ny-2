/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  if(!current.next){
    return head;
  }

  while(current.next){
    let temp = current.next;
    current.next = prev;

    prev = current;
    current = temp;
  }

  current.next = prev;
  return current;
}

function create(arr){
  let prev = null;
  let current = null;
  let start = null;

  arr.forEach((val, i) => {
    prev = current;
    current = new Node(val);
    if(prev){
      prev.next = current;
    }
    else {
      start = current;
    }
  });
  return start;
}

let list = create([1, 2, 3, 4, 5]);
console.log(JSON.stringify(list, null, 4));
console.log(JSON.stringify(reverseLinkedList(list), null, 4));

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
