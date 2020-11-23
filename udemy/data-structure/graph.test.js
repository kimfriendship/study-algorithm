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
}

const graph = new Graph();
graph.addVertex("Seoul");
graph.addVertex("Busan");
graph.addVertex("Jeju");
graph.addEdge("Seoul", "Jeju");
graph.addEdge("Seoul", "Busan");
