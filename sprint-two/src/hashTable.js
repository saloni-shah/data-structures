
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = LimitedArray(this._limit);
  
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, tuple);
  }
  var keyVal = LimitedArray(2);
  keyVal.set(0, k);
  keyVal.set(1, v);
  var tempIndex = 0;
  
  while (this._storage.get(index).get(tempIndex) !== undefined) {
    tempIndex += 1;
  }
  var tupleObj = this._storage.get(index);
  tupleObj.set(tempIndex, keyVal);
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tupleObj = this._storage.get(index);
  var returnValue = undefined;
  tupleObj.each((value, index, arr) => {
    console.log(value.get(0));
    if (value.get(0) === k) {
      returnValue = value.get(1);
    }
  });
  return returnValue;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tupleObj = this._storage.get(index);
  tupleObj.each((value, index, arr) => {
    if (value.get(0) === k) {
      value.set(1, undefined);
      value.set(0, undefined);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


