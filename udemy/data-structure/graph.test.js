class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vtx1, vtx2) {
    this.adjacencyList[vtx1].push(vtx2);
    this.adjacencyList[vtx2].push(vtx1);
  }

  removeVertex(vertex) {
    const edges = this.adjacencyList[vertex];
    edges.forEach((key) => this.removeEdge(vertex, key));
    delete this.adjacencyList[vertex];
  }

  removeEdge(vtx1, vtx2) {
    this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(
      (key) => key !== vtx2
    );
    this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
      (key) => key !== vtx1
    );
  }

  DFSRecursively(vertex) {
    const results = [];
    const visited = {};

    const dfs = (v) => {
      if (!v) return null;
      visited[v] = true;
      results.push(v);

      this.adjacencyList[v].forEach((neighbor) => {
        if (!visited[neighbor]) dfs(neighbor);
      });
    };

    dfs(vertex);
    return results;
  }

  DFSIteratively(vertex) {
    const stack = [vertex];
    const results = [];
    const visited = { [vertex]: true };

    while (vertex && stack.length) {
      const v = stack.pop();
      results.push(v);

      this.adjacencyList[v].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return results;
  }

  BFS(vertex) {
    const queue = [vertex];
    const results = [];
    const visited = { [vertex]: true };
    let v;

    while (vertex && queue.length) {
      v = queue.shift();
      results.push(v);

      this.adjacencyList[v].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return results;
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
