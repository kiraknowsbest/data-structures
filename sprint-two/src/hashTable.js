

var HashTable = function() {
  this.limit = 8;
  this.storage = new Array(this.limit);
};

HashTable.prototype.insert = function(k, v) {
/*  if ( k === 'val2' ) {
    debugger;
  }*/
  var index = getIndexBelowMaxForKey(k, this.limit);
  if ( this.storage[index] === undefined ) {
    this.storage[index] = [];
  }

  for ( var i = 0; i < this.storage[index].length; i++ ) {
    if ( this.storage[index][i][0] === k ) {
      this.storage[index][i][1] = v;
      return;
    }
  }

  this.storage[index].push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);
  for ( var i = 0; i < this.storage[index].length; i++) {
    if ( this.storage[index][i][0] === k ) {
      return this.storage[index][i][1];  
    } 
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);
  for ( var i = 0; i < this.storage[index].length; i++) {
    if ( this.storage[index][i][0] === k ) {
      this.storage[index][i][1] = undefined;
      return this.storage[index][i][1];  
    } 
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


