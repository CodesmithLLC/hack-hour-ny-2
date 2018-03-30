/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  const newTail = new Node(val);
  const currentTail = this.tail;
  newTail.prev = currentTail;

  if(!this.head){
    this.head = newTail;
  }
  else {
    currentTail.next = newTail;
  }

  this.tail = newTail;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let current = this.head;
  let done = false;

  while(current && !done){
    if(current.val === val){
      const prev = current.prev;
      const next = current.next;

      if(prev && next){
        prev.next = next;
        next.prev = prev;
      }
      else if(prev){
        prev.next = next;
        this.tail = prev;
      }
      else if(next){
        next.prev = prev;
        this.head = next;
      }
      else {
        this.tail = null;
        this.head = null;
      }
      done = true;
    }
    current = current.next;
  }
};

module.exports = LinkedList;
