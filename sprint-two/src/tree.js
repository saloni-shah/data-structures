var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childrenNode = Tree(value);                
  if (this.children.length > 0) {
    childrenNode.parent = this.children[this.children.length - 1];
  } else {
    childrenNode.parent = null;
  }
  this.children.push(childrenNode); 
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      return this.children[i].contains(target);
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */