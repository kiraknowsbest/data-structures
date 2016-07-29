var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage[item] = item;
};

setPrototype.contains = function(item) {
  return this.storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) {
  delete this.storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add === O(1) constant
 * contains === O(n) linear
 * remove === O(1) constant (depending on how delete works)
 */