class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const item = new Node(val);
    if (!this.length) this.head = item;
    else this.tail.next = item;

    this.tail = item;
    ++this.length;
    return this;
  }

  pop() {
    if (!this.length) return undefined;
    let temp = this.head;
    let pre = null;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    if (pre === null) {
      this.head = null;
      this.tail = null;
    } else {
      pre.next = null;
      this.tail = pre;
    }

    --this.length;
    return temp;
  }

  shift() {
    if (!this.length) return undefined;
    const temp = this.head;

    this.head = temp.next;
    if (!this.head) this.tail = null;

    --this.length;
    return temp;
  }

  unshift(val) {
    const item = new Node(val);

    if (!this.length) {
      this.head = item;
      this.tail = item;
    } else {
      item.next = this.head;
      this.head = item;
    }

    ++this.length;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let val = this.head;

    for (let i = 1; i <= idx; i++) {
      val = val.next;
    }

    return val;
  }

  set(idx, val) {
    const item = this.get(idx);
    if (!item) return false;
    else item.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);
    const item = new Node(val);
    const pre = this.get(idx - 1);
    item.next = pre.next;
    pre.next = item;

    ++this.length;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();
    const pre = this.get(idx - 1);
    const item = pre.next;
    pre.next = item.next;

    --this.length;
    return item;
  }

  reverse() {
    let node = this.head;
    let prev = null;
    let next = null;

    this.head = this.tail;
    this.tail = node;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}
