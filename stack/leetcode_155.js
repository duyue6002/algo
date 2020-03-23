/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.data = [];
  this.help = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.data.push(x);
  if (this.help.length === 0 || x < this.help[this.help.length - 1]) {
    this.help.push(x);
  } else {
    this.help.push(this.help[this.help.length - 1]);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.data.pop();
  this.help.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.data[this.data.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.help[this.help.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
