/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = [];
  this.max = [Number.NEGATIVE_INFINITY];
}

Stack.prototype.push = function (val) {
  this.stack.splice(0, 0, val);
  if (val >= this.max[this.max.length - 1]) this.max.push(val);
  return this.stack.length;
};

Stack.prototype.pop = function () {
  let removed_Elem = this.stack.splice(0, 1);
  removed_Elem = removed_Elem[0];
  //find new max
  if (removed_Elem === this.max[this.max.length - 1]) this.max.pop();
  return removed_Elem;
};

Stack.prototype.getMax = function () {
  if (this.stack.length === 0) return undefined;
  return this.max[this.max.length - 1];
};

module.exports = Stack;