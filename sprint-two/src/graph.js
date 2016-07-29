

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {
    'value': node,
    'edgedWith': []
  };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for ( var key in this.nodes ) {
    if ( this.nodes[key].value === node ) {
      return true;
    } 
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if ( this.nodes[node].edgedWith.length > 0 ) {
    for ( var i = 0; i < this.nodes[node].edgedWith.length; i++ ) {
      this.removeEdge( node, this.nodes[node].edgedWith[i] );
    }

  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var args = [fromNode, toNode];
  args.sort( function(a, b) { return a > b; });
  args = args.join('');
  return this.edges.hasOwnProperty(args);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var args = [fromNode, toNode];
  args.sort( function(a, b) { return a > b; });
  this.edges[args.join('')] = {
    'fromNode': fromNode,
    'toNode': toNode
  };
  this.nodes[fromNode].edgedWith.push( toNode );
  this.nodes[toNode].edgedWith.push( fromNode ); 
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var args = [fromNode, toNode];
  args.sort( function(a, b) { return a > b; });
  args = args.join('');
  delete this.edges[args];
  if ( this.nodes[fromNode] === undefined ) {
    debugger;
  }
  this.nodes[fromNode].edgedWith.splice(_.indexOf(this.nodes[fromNode].edgedWith, toNode), 1);
  this.nodes[toNode].edgedWith.splice(_.indexOf(this.nodes[toNode].edgedWith, fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  return _.each(this.nodes, function(item) {
    cb(item.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode === O(1); Constant
 * contains === O(n); Linear
 * removeNode === O(n); Linear
 * hasEdge === O(n); Linear
 * addEdge === O(n); Linear
 * removeEdge === O(n^2); Quadratic
 * forEachNode === O(n); Linear || O(n^2) depending on the callback function invoked
 */