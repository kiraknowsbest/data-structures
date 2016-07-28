var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.len = 0;
};

Queue.prototype.size = function() {
  return this.len;
};

Queue.prototype.enqueue = function( value ) {
  this[this.len] = value;
  this.len++;
};

Queue.prototype.dequeue = function() {
  var dequeued = this[0];
  if ( this.len > 0 ) {
    delete dequeued;
    for ( var i = 0; i < this.len; i++ ) {
      this[i] = this[i + 1];
    }
    this.len--;
    return dequeued;
  }
};