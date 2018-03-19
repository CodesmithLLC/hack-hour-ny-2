/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true if the linked list has a cyclical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

var Node = function(value) {
  this.value = value;
  this.next = null;
}

function hasCycle(head) {
  if(!head){
    return false;
  }

  let current = head;
  let next = current.next;

  while(next && current){
    if(current === next){
      return true;
    }

    current = current.next;
    if(next.next){
      next = next.next.next;
    }
    else {
      return false;
    }
  }

  return false;
}

// function create(arr){
//   const result = new Node(arr[0]);
//   const next = new Node(arr[1]);
//   result.next = next;
//
//   let current = next;
//   for(let i = 2; i < arr.length; i++){
//     current.next = new Node(arr[i]);
//     current = current.next;
//   }
//
//   current.next = next;
//   return result;
// }

// const ll = create(['A', 'B', 'C', 'D', 'E', 'F', 'G'])
// console.log(hasCycle(ll));
//console.log(JSON.stringify(ll))

module.exports = {Node: Node, hasCycle: hasCycle}
