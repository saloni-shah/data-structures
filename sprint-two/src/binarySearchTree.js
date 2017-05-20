var BinarySearchTree = function(value) {  
  var node = {};
  node.value = value;
  node.left = null;
  node.right = null;
  extend(node, BSTMethods);
  return node;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var BSTMethods = {};

BSTMethods.insert = function(value) {
  var newNode = BinarySearchTree(value);
  
  if (newNode.value < this.value) {
    if (this.left === null) {
      this.left = newNode;
    } else {
      this.insert(value);
    }  
  } else if (newNode.value > this.value) {
    if (this.right === null) {
      this.right = newNode;
    } else {
      this.insert(value);
    }  
  }
};

BSTMethods.contains = function(value) {
  var currentNode = this.root;
  var found = false;
  while (!found && currentNode) {
    if (value < currentNode.value) {
      currentNode.left = node;
    } else if (value > currentNode.value) {
      
    }
  }
  
};

BSTMethods.depthFirstLong = function(callback) {
  
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

