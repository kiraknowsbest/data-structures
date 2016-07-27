var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newStack = Object.create(stackMethods);
  newStack.stackSize = 0;

  return newStack;

};

var stackMethods = {};

stackMethods.size = function () {
  return this.stackSize;
};

stackMethods.push = function (value) {
  var size = this.stackSize;
  this[size] = value;
  this.stackSize ++;
};

stackMethods.pop = function () {
  var size = this.stackSize;
  if ( size > 0 ) {
    var popped = this[size - 1];
    delete popped;
    this.stackSize --;
    return popped;
  }
};