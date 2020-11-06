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

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;
    while (true) {
      if (temp.val === val) return undefined;
      if (temp.val > val) {
        if (!temp.left) {
          temp.left = newNode;
          break;
        } else {
          temp = temp.left;
        }
      } else if (temp.val < val) {
        if (!temp.right) {
          temp.right = newNode;
          break;
        } else {
          temp = temp.right;
        }
      }
    }

    return this;
  }

  breathFirstSearch() {
    if (!this.root) return null;
    let node = this.root;
    let queue = [node];
    let data = [];

    while (queue.length) {
      node = queue.pop();
      data.push(node.val);
      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
    }

    return data;
  }

  depthFirstSearchPreOrder() {
    if (!this.root) return null;
    let node = this.root;
    let data = [];

    const traverse = (node) => {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(node);
    return data;
  }

  depthFirstSearchPostOrder() {
    if (!this.root) return null;
    let node = this.root;
    let data = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    };

    traverse(node);
    return data;
  }

  depthFirstSearchInOrder() {
    if (!this.root) return null;
    let node = this.root;
    let data = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    };

    traverse(node);
    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
