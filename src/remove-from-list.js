const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 function removeKFromList(l, k) {
  let prevEl;
  let currEl=l[0];
  console.log(curEl);
  let position = 0;
  while (currEl.next){

    if (prevEl){
      if (prevEl.next == null){
        prevEl.next = currEl;
      }
    }

    if (currEl.value === k){
      if (prevEl){
        prevEl.next = null;

      }
      l.splice(position,1);
      position--;
      currEl = null;
    }

    if (currEl=null){prevEl = currEl};
    position++;
    currEl = currEl.next;
  }

  return l;
}

module.exports = {
  removeKFromList
};
