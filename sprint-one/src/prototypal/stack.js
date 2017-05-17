var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(stackMethods);
  storage.index = 0;
  storage.keyVal = {};
  return storage;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.keyVal[this.index] = value;
  this.index++;
};

stackMethods.pop = function(value) {
  var poppedItem = this.keyVal[this.index - 1];
  delete poppedItem;
  this.index--;
  return poppedItem;
};

stackMethods.size = function(value) {
  if ( this.index < 0 ) {
    return 0;
  } else {
    return this.index;
  }
};


