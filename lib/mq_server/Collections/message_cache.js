var Queue = require("./queue.js");

function createQueue(options) {
  if (options["queueType"] == "queue") {
    return new Queue();
  } else if (options["queueType"] == "priority") {
    return new PriorityQueue(options["comparator"]);
  }
}

class MessageCache {
  constructor(options) {
    this.options = options;
    this.cache = {};
  }

  push(name, obj) {
    if (this.cache[name] == null) {
      this.cache[name] = createQueue(this.options);
    }

    this.cache[name].push(obj);
  }

  pop(name) {
    if (this.cache[name] == null) {
      return null;
    }

    return this.cache[name].pop();
  }
}
