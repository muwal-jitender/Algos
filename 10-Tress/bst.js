class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// Binary Search Tree
class Bst {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while (true) {
            if (value < current.value) {
                if (current.left) current = current.left;
                else {
                    current.left = newNode;
                    return this;
                }
            }
            else if (value > current.value) {
                if (current.right) current = current.right;
                else {
                    current.right = newNode;
                    return this;
                }
            }
            else return undefined;
        }
    }
    // Find X element
    search(x) {
        if (!this.root) return undefined;
        let current = this.root;
        while (true) {
            if (x === current.value) return current;
            else if (x < current.value) {
                if (!current.left) return undefined;
                current = current.left;
            }
            else if (x > current.value) {
                if (!current.right) return undefined;
                current = current.right;
            }
        }
    }
    insertRecursive(value, current = this.root) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        if (value < current.value) {
            if (current.left) return this.insertRecursive(value, current.left);
            else {
                current.left = newNode;
                return this;
            }
        }
        else if (value > current.value) {
            if (current.right) return this.insertRecursive(value, current.right);
            else {
                current.right = newNode;
                return this;
            }
        }
        else return undefined;
    }
    // Breadth First Search
    bsf() {
        let node = this.root;
        let queue = [];
        let data = [];
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
    // Depth first search PreOrder
    dfsPreOrder() {
        let data = []
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    dfsPostOrder() {
        let data = []
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);

        }
        traverse(this.root);
        return data;
    }
    dfsInOrder() {
        let data = []
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

}


let bst = new Bst();
bst.insertRecursive(10);
bst.insertRecursive(6)
bst.insertRecursive(15);
bst.insertRecursive(8);
bst.insertRecursive(3);
bst.insertRecursive(20);
bst.insertRecursive(13);
console.log(bst);
// let result = bst.search(6);
// console.log(result);