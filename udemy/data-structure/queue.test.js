class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newnNode;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.size) return null;

    const temp = this.first;
    this.first = temp.next;
    if (!this.first) this.last = null;

    this.size--;
    return temp.val;
  }
}
