var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.index = 0;
  storage.keyval = {};
  extend(storage, stackMethods);
  return storage;
};

var stackMethods = {};

var extend = function (to, from) {
  // body...
  for (var key in from) {
    to[key] = from[key]; 
  }
};



stackMethods.push = function(value) {
  this.keyval[this.index] = value;
  this.index++;
};


stackMethods.pop = function(value) {
  var poppedvalue = this.keyval[this.index - 1];
  delete poppedvalue;
  this.index--;
  return poppedvalue;
};

stackMethods.size = function(value) {
  if (this.index < 0) {
    return 0;
  } else {
    return this.index;
  }
};