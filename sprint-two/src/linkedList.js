var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.len = 0;
  list.headIndex = 0;

  list.addToTail = function(value) {
    list[list.len] = Node( value );
    if ( list.len > 0 ) {
      list.tail.next = list[list.len];
    }
    list.tail = list[list.len];
    //if list.len = 0, sets value for list.head
    if ( list.len === 0 ) {
      list.head = list[list.len];
      list.headIndex = 0;
    }
    list.len++;
  };

  list.findNth = function( number ) {
    //return nth value in linkedList and return that value
    if ( number > list.len ) {
      return undefined;
    }
    for ( i = list.headIndex; i < list.len; i ++ ) {
      if ( number - 1 === i ) {
        return list[i].value;
      }
    }
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

  list.removeNode = function (number) {
    var nextNode = list[number - 1].next;
    var removedNode = list[number - 1];
    list[number - 2].next = nextNode;
    delete removedNode;
    list.len--;
    return removedNode;
  };

  list.addNode = function (number) {

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