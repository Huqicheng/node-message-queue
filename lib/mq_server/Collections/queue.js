class Queue {
  constructor() {
    this.list = new Array();
  }

  push(obj) {
    this.list.push(obj);
  }

  pop() {
    if (this.list.length >= 1) {
      return this.list.shift();
    } else {
      return null;
    }
  }
}




module.exports = Queue;
