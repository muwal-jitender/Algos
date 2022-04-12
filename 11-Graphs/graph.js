class Graph {
    constructor() {
        this.adjacencyList = {};
        this.list = new Map();
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        if (!this.list.has(vertex)) this.list.set(vertex, []);
    }
    removeVertex(vertex) {
        let keys = this.adjacencyList[vertex];
        for (let key of keys) {
            this.removeEdge(vertex, key);
        }
        this.list.delete(vertex);
        delete this.adjacencyList[vertex];
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);

        let v1 = this.list.get(vertex1);
        v1.push(vertex2);

        let v2 = this.list.get(vertex2);
        v2.push(vertex1);

    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1]?.filter(v1 => v1 !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2]?.filter(v2 => v2 !== vertex1);

        let v1 = this.list.get(vertex1);
        this.list.visited(vertex1, v1.filter(v => v !== vertex2));

        let v2 = this.list.get(vertex2);
        this.list.visited(vertex2, v2.filter(v => v !== vertex1));
    }
    dfsObject(vertex, visited = new Map()) {
        if (!vertex) return;
        console.log(vertex);
        let neighbers = this.adjacencyList[vertex];
        visited.add(vertex)
        for (let neighber of neighbers) {
            if (!visited.has(neighber)) {
                return this.dfsObject(neighber, visited);
            }
        }
    }
    dfsMap(vertex, visited = new visited()) {
        if (!vertex) return;
        console.log(vertex);
        let neighbers = this.list.get(vertex);
        visited.add(vertex)
        for (let neighber of neighbers) {
            if (!visited.has(neighber)) {
                return this.dfsObject(neighber, visited);
            }
        }
    }
    dfsMapWithIteration(vertex) {
        let stack = [];
        let visited = new Map();
        visited.add(vertex);
        stack.push(vertex);
        while (stack.length) {
            console.log(stack);
            vertex = stack.pop();
            console.log(vertex);
            let neighbers = this.list.get(vertex);
            for (let neighber of neighbers) {
                if (!visited.has(neighber)) {
                    stack.push(neighber);
                    visited.add(neighber);
                }
            }
        }
    }

    bfsMapWithIteration(vertex) {
        let stack = [];
        let visited = new Map();
        visited.add(vertex);
        stack.push(vertex);
        while (stack.length) {
            console.log(stack);
            vertex = stack.shift();
            console.log(vertex);
            let neighbers = this.list.get(vertex);
            for (let neighber of neighbers) {
                if (!visited.has(neighber)) {
                    stack.push(neighber);
                    visited.add(neighber);
                }
            }
        }
    }
}

var g = new Graph();
g.addVertex('Dallas');
g.addVertex('Tokyo');
g.addVertex('Aspen');
g.addVertex('Los Angeles');
g.addVertex('Hong Kong');

g.addEdge('Dallas', 'Tokyo');
g.addEdge('Dallas', 'Aspen');
g.addEdge('Hong Kong', 'Aspen');
g.addEdge('Hong Kong', 'Tokyo');
g.addEdge('Hong Kong', 'Dallas');
g.addEdge('Los Angeles', 'Hong Kong');
g.addEdge('Los Angeles', 'Aspen');

g.dfsMapWithIteration('Dallas');
g.bfsMapWithIteration('Dallas');


