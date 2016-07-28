var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create( queueMethods );
  queue.len = 0;
  return queue;
};

var queueMethods = {};

queueMethods.size = function () {
  return this.len;
};

queueMethods.enqueue = function (value) {
  this[this.len] = value;
  this.len++;
};

queueMethods.dequeue = function () {
  if ( this.len > 0 ) {
    var dequeued = this[0];
    delete dequeued;
    for ( var i = 0; i < this.len; i++ ) {
      this[i] = this[i + 1];
    }
    this.len--;
    return dequeued;
  }
};