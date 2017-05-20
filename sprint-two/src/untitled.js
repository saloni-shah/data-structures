// priority queue
// two methods: 
// enqueue: takes a value and a priority
// dequeue: removes and returns the item with the highest priority
// if multiple items are tied for highest priority, 
// remove the one that was added first

var PriorityQueue = function () {
  this.obj = {};
}

PriorityQueue.prototype.enqueue = function (value, priority) {
  this.obj[value] = priority;

}
//a-1,b-2,c-1
PriorityQueue.prototype.dequeue = function() {
  var max = 0;
  for(let key in this.obj){
    if(this.obj[key] > max){
      max = this.obj[key];
      keyLabel = key;
    }
  }
  var deletedLabel = this.obj[keyLabel];
  delete this.obj[keyLabel];
  return deletedLabel;
};

var obj = new PriorityQueue();
obj.enqueue('a',1);
obj.enqueue('b',2);
obj.enqueue('c',1);
console.log(obj.dequeue()); // b
console.log(obj.dequeue()); // 