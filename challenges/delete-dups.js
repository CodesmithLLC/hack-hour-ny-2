/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */


function LinkedList() {
    this.size = 0;
    this.head = null;
}

LinkedList.prototype = {
  
    createNode: function(val) {
        return {
            value: val,
            next: null
        }
    },
    
    // add to tail 
    addNode: function(val) {
      
        newNode = this.createNode(val);

        if (this.head == null) { 
            this.head = newNode; 
        } else {  
            current = this.head;    
            while(current.next != null) {
                current = current.next;  // keep moving forward
            }
            current.next = newNode;  // when curr next is null add val 
        }
        this.size++;  
    },    
    
    
    removeDups: function() {
      let prev = this.head;
      let current = this.head.next;
      let hash = {};
      
      while(current != null) {
        if(!hash[current.value]) {
           hash[current.value] = true;
        } else {
           prev.next = current.next;
           this.size--;
        }
           prev = current;
           current = current.next;
      }
    }

}


let LL = new LinkedList()

LL.addNode(1)
LL.addNode(2)
LL.addNode(3)
LL.addNode(4)
LL.addNode(3)

//console.log(LL)

LL.removeDups()  // size 4

module.exports = deleteDups;
