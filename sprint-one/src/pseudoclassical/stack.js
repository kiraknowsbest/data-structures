var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stackSize = 0;
};

Stack.prototype.size = function () {
  return this.stackSize;
};

Stack.prototype.push = function ( value ) {
  var size = this.stackSize;
  this[size] = value;
  this.stackSize++;
};

Stack.prototype.pop = function () {
  var size = this.stackSize;
  if ( size > 0 ) {
    var popped = this[size - 1];
    delete popped;
    this.stackSize--;
    return popped;
  }
};

var newStack = new Stack;