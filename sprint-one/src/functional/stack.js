var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store valuesde
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    var popped = storage[size - 1];
    delete popped;
    size--;
    return popped;
  };

  someInstance.size = function() {
    return Math.max( 0, size );
  };

  return someInstance;
};
