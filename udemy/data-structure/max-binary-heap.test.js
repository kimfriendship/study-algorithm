class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    let idx = this.values.length - 1;

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (parent >= val) break;
      this.values[idx] = parent;
      this.values[parentIdx] = val;
      idx = parentIdx;
    }

    return this;
  }

  extractMax() {
    const max = this.values[0];
    const element = this.values.pop();
    let idx = 0;

    if (this.values.length <= 0) return max;
    this.values[0] = element;

    while (true) {
      const length = this.values.length;
      const rightIdx = 2 * idx + 1;
      const leftIdx = 2 * idx + 2;
      let rightChild, leftChild;
      let swap = null;

      if (leftIdx < length) {
        leftChild = this.values[leftIdx];
        if (element < leftChild) swap = leftIdx;
      }

      if (rightIdx < length) {
        rightChild = this.values[rightIdx];
        if (
          (element < rightChild && swap === null) ||
          (leftChild < rightChild && swap !== null)
        )
          swap = rightIdx;
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }

    return max;
  }
}

const heap = new MaxBinaryHeap();
