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

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  l1Str = '';
  l2Str = '';
  if (l1.next === null) {l1Str = l1.value.toString()}
  else {
    while ( l1.next != null ) {
      l1Str += l1.value;
      l1 = l1.next
      if(l1.next === null) {l1Str += l1.value;}
    }
  }
  if (l2.next === null) {l2Str = l2.value.toString()}
  else {
    while ( l2.next != null ) {
      l2Str += l2.value;
      l2 = l2.next
      if(l2.next === null) {l2Str += l2.value;}
    }
  }
  let l1Reve = ''
  for (let i = 0; i < l1Str.length; i += 1) {
    l1Reve = l1Str[i] + l1Reve 
  }
  let l2Reve = ''
  for (let i = 0; i < l2Str.length; i += 1) {
    l2Reve = l2Str[i] + l2Reve 
  }
  
  const sum = Number(l1Reve) + Number(l2Reve)
  const sumStr = sum.toString()

  function iterateList(list, val){
    if (list.next === null) {
      list.next = new Node(val)
    }
    else {
      return iterateList(list.next, val)
    }
  }
  
  const sumLst = new Node(sumStr[sumStr.length -1])
  for (let i = sumStr.length -2; i >= 0; i -= 1){
    iterateList(sumLst, sumStr[i])
  }
  return sumLst
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
