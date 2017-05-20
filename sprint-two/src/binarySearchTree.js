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
      this.left.insert(value);
    }

  } else if (newNode.value > this.value) {
    if (this.right === null) {
      this.right = newNode;
    } else {  
      this.right.insert(value);
    }  
  }
};

BSTMethods.contains = function(value) {
  if (this.value === value) {
    return true;
  } else {
    if (value < this.value) {
      if (!this.left) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else {
      if (!this.right) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  }
  return false;
};

BSTMethods.depthFirstLog = function(callback) {
  if (this.value) {
    callback(this.value);  
  } else {
    if (this.left) {
      return this.left.depthFirstLog(callback);
    }
    if (this.right) {
      return this.right.depthFirstLog(callback);
    }
  }

  
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

