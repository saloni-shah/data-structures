var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.index = 0;
  this.storage = {}; 
};

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

Stack.prototype.pop = function(value) {
  var poppedItem = this.storage[this.index - 1];
  delete poppedItem;
  this.index--;
  return poppedItem;
};

Stack.prototype.size = function(value) {
  return this.index < 0 ? 0 : this.index;
};



