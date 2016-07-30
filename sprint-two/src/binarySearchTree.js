var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function (value) {
  //compare value against tree head
  if ( this.value > value ) {
    //tests if left is undefined
    if ( !this.left ) {
      //sets new tree to this.left
      this.left = new BinarySearchTree(value);
    } else {
      //tests value against this.left.left
      if ( this.left.value > value ) {
        //tests if this.left.left is undefined
        if ( !this.left.left ) {
          //sets new tree to this.left.left
          this.left.left = new BinarySearchTree(value);
        }   
      } else {
        //tests if this.left.right is undefined
        if ( !this.left.right ) {
          //sets this.left.right to new tree
          this.left.right = new BinarySearchTree(value);
        }
      }
    }
  } else {
    //value is more than tree head's value
    //checks if this.right is undefined
    if ( !this.right ) {
      //sets this.right to new tree
      this.right = new BinarySearchTree(value);
    } else {
      // test value against this.right.right
      if ( this.right.value > value ) {
        // if this.right.left is undefined
        if ( !this.right.left ) {
          // sets new tree to this.right.left
          this.right.left = new BinarySearchTree(value);
        }
      } else {
        // tests if this.right.right is undefined 
        if ( !this.right.right ) {
          // sets new tree to this.right.right
          this.right.right = new BinarySearchTree(value);
        }
      } 
    }
  }
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