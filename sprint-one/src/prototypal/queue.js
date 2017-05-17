var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(queueMethods);
  storage.index = 0;
  storage.lastindex = 0;
  storage.keyValue = {};
  return storage;
};

var queueMethods = {};


queueMethods.enqueue = function (value) {
  this.keyValue[this.index] = value;
  this.index++;
};

queueMethods.dequeue = function () {
  var deleted = this.keyValue[this.lastindex];
  delete deleted;
  this.lastindex++;
  return deleted;
};

queueMethods.size = function () {
  return (this.index - this.lastindex) < 0 ? 0 : this.index - this.lastindex;
};

