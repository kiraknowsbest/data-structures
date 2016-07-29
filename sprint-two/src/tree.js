var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend( newTree, treeMethods );
  newTree.children = [];  // fix me
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push( Tree(value) );
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  var wasFound = false;
  for ( var i = 0; i < this.children.length; i++ ) {
    wasFound = this.children[i].contains(target);
    if ( wasFound ) {
      return true;
    }
  }
  return false;
};
/*
 * Complexity: What is the time complexity of the above functions?
 * treeMethods.addChild is constant    O(1)
 * treeMethods.contains is linear      O(n)
 */