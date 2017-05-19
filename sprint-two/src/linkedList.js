var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
      // var currentHead = this.head;
      // while (currentHead.next !== null) {
      //   currentHead = currentHead.next;
      // }
      // currentHead.next = Node(value);
      // this.tail = currentHead.next;
    }
  };

  list.removeHead = function() {
    var deletehead = this.head.value;
    this.head = this.head.next;
    return deletehead;
  };

  list.contains = function(target) {
    var currentHead = this.head;
    while (currentHead !== null) {
      if (currentHead.value === target) {
        return true;
      }
      currentHead = currentHead.next;
    }
    return false;
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
