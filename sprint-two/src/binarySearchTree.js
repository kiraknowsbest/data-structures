var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function (value) {
  
  var addTree = function (tree) {
    if ( tree.value > value ) {
      if ( !tree.left ) {
        tree.left = new BinarySearchTree(value);
      } else {
        addTree( tree.left );
      }
    } else {
      if ( !tree.right ) {
        tree.right = new BinarySearchTree(value);
      } else {
        addTree( tree.right );
      }
    }
  };

  addTree(this);
};

BinarySearchTree.prototype.contains = function (value) {
  var found = false;

  var search = function (tree) {
    if ( tree.value === value ) {
      found = true;
    } else {
      if ( tree.left ) {
        search( tree.left );
      }
      if ( tree.right ) {
        search( tree.right );
      }
    }
  };

  search(this);
  return found;
};

BinarySearchTree.prototype.depthFirstLog = function (cb) {

  var callIt = function (tree) {
    cb( tree.value );
    if ( tree.left ) {
      callIt( tree.left );
    } 
    if ( tree.right ) {
      callIt( tree.right );
    }
  };

  callIt(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 * Insert is O(log n), Logarithmic
 * contains is O(n), linear ( we are thinking of how exactly to refactor it )
 * depthFirstLog is O(n), linear
 */