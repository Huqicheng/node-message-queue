var Queue = require("./queue.js");

const top = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;

class PriorityQueue extends Queue {
  constructor(comparator = (a,b) => a>b) {
    super();
    this._comparator = comparator;
  }

  push(obj) {
    this.list.push(obj);
    this._up();
  }

  pop() {
    if(this.list.length == 0) {
      return null;
    }
    const poppedValue = this.list[top];
    const bottom = this.list.length - 1;
    if (bottom > top) {
      this._swap(top,bottom);
    }
    this.list.pop();
    this._down();
    return poppedValue;
  }

  _swap(i,j) {
    [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
  }

  _up() {
    let node = this.list.length-1;
    while(node > top && this._comparator(this.list[node], this.list[parent(node)])) {
      this._swap(node, parent(node));
      node = parent(node);
    }
  }

  _down() {
    let node = top;
    while(
      (left(node) < this.list.length && this._comparator(this.list[left(node)], this.list[node])) ||
      (right(node) < this.list.length && this._comparator(this.list[right(node)], this.list[node]))
    ) {
      let maxChild = right(node) < this.list.length && this._comparator(this.list[right(node)], this.list[left(node)])?right(node):left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  }


}


if (require.main === module) {
  queue = new PriorityQueue();
  queue.push(1);
  queue.push(2);
  queue.push(3);
  console.log(queue.list);
  console.log(queue.pop());
  console.log(queue.pop());
  console.log(queue.pop());
  console.log(queue.pop());
} else {
  module.exports = PriorityQueue;
}















