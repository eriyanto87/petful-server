//Creates a node containing the data and a reference to the next item
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    // Set initial data.
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    // Add some data to the queue.
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    // Remove some data from the queue.
    //if the queue is empty, there is nothing to remove
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last === null;
    }
    return node.value;
  }
  //return first value
  peek() {
    return this.first.value;
  }

  isEmpty() {
    if (this.first === null) {
      return null;
    }
  }

  show() {
    // Return the next item in the queue.
    let currentNode = this.first;
    while (currentNode !== null) {
      currentNode = currentNode.next;
    }
  }
}

// Return all items in the queue.
const displayQ = (queue) => {
  let qArr = [];
  let currentNode = queue.first;

  while (currentNode) {
    qArr.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return qArr;
};

module.exports = { _Node, Queue, displayQ };
