class WeightedGraph {
    constructor() {
        /**
         * The Hash (Map) of all the vertices and their weights. This list depicts the Graph representation
         */
        this.graph = new Map();
    }
    addVertex(vertex) {
        if (!this.graph.has(vertex)) this.graph.set(vertex, []);
    }
    addEdge(vertex1, vertex2, weight) {
        this.graph.get(vertex1).push({ vertex: vertex2, weight });
        this.graph.get(vertex2).push({ vertex: vertex1, weight });
    }
    Dijkstra(start, finish) {
        const priorityQueue = new PriorityQueue();
        /**
         * The Hash map that stores the vertices and their updated distance value (weight)
         */
        const weightTotal = new Map();
        /**
         * The Hash map that stores vertices and their parent (previous) vertices
         */
        const previous = new Map();
        /**
         * The final output, a shortestPath from of vertices from start to finish
         */
        const shortestPath = [];
        /**
         * The vertex popped from the queue
         */
        let queueVertex;
        // Set up initial state
        for (let [vertex, value] of this.graph) {
            if (vertex === start) {
                weightTotal.set(vertex, 0);
                priorityQueue.enqueue(vertex, 0);

            }
            else {
                weightTotal.set(vertex, Infinity);
                priorityQueue.enqueue(vertex, Infinity);
            }
            previous.set(vertex, null);
        }
        while (priorityQueue.items.length) {
            queueVertex = priorityQueue.dequeue().vertex;
            // End of the loop
            if (queueVertex === finish) {
                console.log(weightTotal);
                console.log(previous);
                while (previous.get(queueVertex)) {
                    shortestPath.push(queueVertex);
                    queueVertex = previous.get(queueVertex);
                }
                break;
            }
            /**
             * The total weight from Node N to Node N+1+2+3...
             */
            let total = weightTotal.get(queueVertex);
            if (queueVertex || total !== Infinity) {
                let neighbers = this.graph.get(queueVertex);
                for (let neighber of neighbers) {
                    let { vertex } = neighber;

                    // Calculate the new total weight to neighoring node
                    let newWeight = total + neighber.weight;
                    let previousWeight = weightTotal.get(vertex);
                    if (newWeight < previousWeight) {
                        weightTotal.set(vertex, newWeight);
                        previous.set(vertex, queueVertex);
                        priorityQueue.enqueue(vertex, newWeight);
                    }
                }
            }
        }
        return shortestPath.concat(queueVertex).reverse();
    }
}

class PriorityQueue {
    constructor() {
        /**
         * The Queue that contains vertices and their priority (weights) to help traverse the graph
         */
        this.queue = [];
    }
    enqueue(vertex, priority) {
        this.queue.push({ vertex, priority });
        this.sort();
    }
    dequeue() {
        return this.queue.shift();
    }
    sort() {
        this.queue.sort((a, b) => a.priority - b.priority);
    }
}

var g = new WeightedGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B', 4);
g.addEdge('A', 'C', 2);
g.addEdge('B', 'E', 3);
g.addEdge('C', 'D', 2);
g.addEdge('C', 'F', 4);
g.addEdge('D', 'E', 3);
g.addEdge('D', 'F', 1);
g.addEdge('E', 'F', 1);
console.log(g.Dijkstra('A', 'E'));
// g.addVertex('Dallas');
// g.addVertex('Tokyo');
// g.addVertex('Aspen');
// g.addVertex('Los Angeles');
// g.addVertex('Hong Kong');

// g.addEdge('Dallas', 'Hong Kong', 12);
// g.addEdge('Dallas', 'Aspen', 8);
// g.addEdge('Dallas', 'Los Angeles', 3);
// g.addEdge('Los Angeles', 'Aspen', 2);
// g.addEdge('Los Angeles', 'Tokyo', 19);
// g.addEdge('Aspen', 'Hong Kong', 5);
// g.addEdge('Aspen', 'Tokyo', 6);
// g.addEdge('Hong Kong', 'Tokyo', 18);
