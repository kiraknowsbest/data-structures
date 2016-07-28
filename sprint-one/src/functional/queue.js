var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var instSize = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[instSize] = value;
    instSize++;
  };

  someInstance.dequeue = function() {
    if ( instSize > 0 ) {
      var dequeued = storage[0];
      for ( var i = 1; i < instSize; i++ ) {
        storage[ i - 1 ] = storage[ i ];
      }
      delete storage[instSize];
      instSize--;
      return dequeued;
    }
  };

  someInstance.size = function() {
    return instSize;
  };

  return someInstance;
};