var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.len = 0;
  list.headIndex = 0;

  list.addToTail = function(value) {
    list[list.len] = Node( value );
    list.tail = list[list.len];
    //if list.len = 0, sets value for list.head
    if ( list.len === 0 ) {
      list.head = list.tail;
      list.headIndex = 0;
    }
    list.len++;
  };

  list.removeHead = function() {
    var removedHead = list[list.headIndex].value;
    delete list[list.headIndex];
    list.headIndex++;
    list.head = list[list.headIndex];
    list.len--;
    return removedHead;
  };

  list.contains = function(target) {
    // refactored with contains and pluck!
    return _.contains(_.pluck( list, 'value' ), target);
      
    /*for ( var key in list ) {
      if ( list[key].value === target ) {
        return true;
      }
    }
    return false;*/
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */