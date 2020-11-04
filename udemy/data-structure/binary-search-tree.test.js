class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;
    while (true) {
      if (temp.val === val) return undefined;
      if (temp.val > val) {
        if (temp.left === null) {
          temp.left = newNode;
          break;
        } else {
          temp = temp.left;
        }
      } else if (temp.val < val) {
        if (temp.right === null) {
          temp.right = newNode;
          break;
        } else {
          temp = temp.right;
        }
      }
    }

    return this;
  }

  find(val) {
    if (this.root === null) return false;
    let temp = this.root;

    while (true) {
      if (temp.val === val) return temp;
      if (temp.val > val) {
        if (temp.left === null) return false;
        temp = temp.left;
      } else if (temp.val < val) {
        if (temp.right === null) return false;
        temp = temp.right;
      }
    }
  }
}
