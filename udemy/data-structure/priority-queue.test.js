class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);

    this.values.push(newNode);
    let idx = this.values.length - 1;

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (parent.priority <= newNode.priority) break;
      this.values[parentIdx] = newNode;
      this.values[idx] = parent;
      idx = parentIdx;
    }

    return this;
  }

  dequeue() {
    const min = this.values[0];
    const element = this.values.pop();
    let idx = 0;

    if (this.values.length <= 0) return min;
    this.values[0] = element;

    while (true) {
      const length = this.values.length;
      const rightIdx = 2 * idx + 1;
      const leftIdx = 2 * idx + 2;
      let rightChild, leftChild;
      let swap = null;

      if (leftIdx < length) {
        leftChild = this.values[leftIdx];
        if (element.priority > leftChild.priority) swap = leftIdx;
      }

      if (rightIdx < length) {
        rightChild = this.values[rightIdx];
        if (
          (swap === null && element.priority > rightChild.priority) ||
          (swap !== null && leftChild.prority > rightChild.priority)
        )
          swap = rightIdx;
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }

    return min;
  }
}

const heap = new PriorityQueue();
heap.enqueue("4", 4);
heap.enqueue("7", 7);
heap.enqueue("2", 2);
heap.enqueue("5", 5);
heap.enqueue("1", 1);
