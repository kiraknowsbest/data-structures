var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.stackSize = 0;
  _.extend(newStack, Stack.stackMethods);

  return newStack;
};

Stack.stackMethods = {};

Stack.stackMethods.size = function() {
  return this.stackSize;
};

Stack.stackMethods.push = function (value) {
/*  var size = this.stackSize;
  this[size] = this.stackSize;*/
  this.stackSize ++;
};

Stack.stackMethods.pop = function () {
  if (this.stackSize > 0) {
    this.stackSize--;
    // return something
  }
};