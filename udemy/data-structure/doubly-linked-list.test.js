class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.length) this.head = newNode;
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    ++this.length;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;

    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    --this.length;
    return poppedNode;
  }

  shift() {
    if (!this.length) return undefined;
    const shiftedNode = this.head;

    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }

    --this.length;
    return shiftedNode;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    ++this.length;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    const middle = Math.floor(this.length / 2);
    let node;

    if (idx < middle) {
      let current = 0;
      node = this.head;
      while (current !== idx) {
        node = node.next;
        current++;
      }
    } else {
      let current = this.length - 1;
      node = this.tail;
      while (current !== idx) {
        node = node.prev;
        current--;
      }
    }

    return node;
  }

  set(idx, val) {
    const node = this.get(idx);
    if (!node) return false;
    node.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const nextNode = this.get(idx);
    const prevNode = nextNode.prev;
    newNode.next = nextNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    nextNode.prev = newNode;

    ++this.length;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return !!this.shift;
    if (idx === this.length - 1) return !!this.pop;

    const node = this.get(idx);
    const prevNode = node.prev;
    const nextNode = node.next;
    node.next = null;
    node.prev = null;
    prevNode.next = nextNode;

    --this.length;
    nextNode.prev = prevNode;

    return node;
  }

  reverse() {
    let temp = this.tail;
    let before = null;
    let after = temp.prev;

    this.tail = this.head;
    this.head = temp;

    while (after !== null) {
      temp.prev = before;
      temp.next = after;
      before = temp;
      temp = after;
      after = temp.prev;
    }

    return this;
  }
}
