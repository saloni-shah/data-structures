var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  var index = 0;
  var lastindex = 0;
 
  someInstance.enqueue = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.dequeue = function() {
    var result = storage[lastindex];
    delete result;
    lastindex++;
    return result;
  };

  someInstance.size = function() {
    if (index - lastindex < 0) {
      return 0;
    } else {
      return index - lastindex;
    }
  };

  return someInstance;
};
