
var MyQueue = function() {
    this.list = new LinkedList();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.list.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.list.dequeue();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.list.peek();
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.list.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  peek() {
    return this.head ? this.head.val : null;
  }
  dequeue() {
    let temp = this.peek();
    
    if (this.head) this.head = this.head.next;
    else this.head = null;
    
    this.length--;
    return temp;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}