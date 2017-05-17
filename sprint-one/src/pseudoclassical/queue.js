var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.index = 0;
  this.lastindex = 0;
  this.keyVal = {};
};


Queue.prototype.enqueue = function(value) {
  this.keyVal[this.index] = value;
  this.index++;
};

Queue.prototype.dequeue = function() {
  var solution = this.keyVal[this.lastindex];
  delete solution;
  this.lastindex++;
  return solution;
};

Queue.prototype.size = function() {
  return this.index - this.lastindex < 0 ? 0 : this.index - this.lastindex;
};
