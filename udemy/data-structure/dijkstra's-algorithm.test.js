class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vtx1, vtx2, weight) {
    this.adjacencyList[vtx1].push({ node: vtx2, weight });
    this.adjacencyList[vtx2].push({ node: vtx1, weight });
  }

  dijkstra(start, end) {
    const nodes = new PriorityQueue();
    const paths = [];
    const distances = {};
    const prevs = {};

    for (const vtx in this.adjacencyList) {
      const val = vtx === start ? 0 : Infinity;
      distances[vtx] = val;
      nodes.enqueue(vtx, val);
      prevs[vtx] = null;
    }

    while (nodes.values.length) {
      let current = nodes.dequeue().val;
      if (current === end) {
        while (prevs[current]) {
          paths.unshift(current);
          current = prevs[current];
          if (!prevs[current]) paths.unshift(current);
        }
        return paths;
      }

      for (const neighbor of this.adjacencyList[current]) {
        if (distances[current] === Infinity) break;
        const node = neighbor.node;
        const distance = distances[current] + neighbor.weight;
        if (distances[node] > distance) {
          distances[node] = distance;
          prevs[node] = current;
          nodes.enqueue(node, distance);
        }
      }
    }
  }
}

const g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);
