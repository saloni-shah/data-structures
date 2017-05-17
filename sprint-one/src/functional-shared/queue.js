var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.keyvalue = {};
  storage.index = 0;
  storage.lastIndex = 0;
  extend(storage, queueMethods);
  return storage;
};

var extend = function (to, from) {
  // body...
  for (var key in from) {
    to[key] = from[key]; 
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.keyvalue[this.index] = value;
  this.index++;
};

queueMethods.dequeue = function(value) {
  var value = this.keyvalue[this.lastIndex];
  delete value;
  this.lastIndex++;
  return value;
};
                                                           
queueMethods.size = function() {
  if (this.index - this.lastIndex < 0) {
    return 0;
  } else {
    return this.index - this.lastIndex;
  }
};


