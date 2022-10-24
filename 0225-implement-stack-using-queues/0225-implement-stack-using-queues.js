
var MyStack = function() {
    this.arr = [];
  // isn't this trivial with JavaScript arrays? I need to redo this problem in a non-trivial manner
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.arr.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.arr.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.arr[this.arr.length -1];
    
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  if (this.arr.length === 0) return true; // <-- made a simple error, confusing single = with triple ===
  else return false;
    
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */