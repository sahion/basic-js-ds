const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  info = [];
  getUnderlyingList() {
    return this.info[0];
  }

  enqueue(value) {
    let a = new ListNode(value);
    if (this.info.length>0) {this.info[this.info.length-1].next = a};
    this.info.push(a); 
  }

  dequeue() {
    let el = this.info.shift();
    return el.value;
  }
}

module.exports = {
  Queue
};
