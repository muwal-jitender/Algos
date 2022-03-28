class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    /**
     * Add a new node to the end of the list
     * @param {*} data The inforamtion to be store in the list
     * @returns the entire list
     */
    push(data) {
        var newNode = new Node(data);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
        return this;
    }
    /**
     * Remove the last node from the list
     */
    pop() {
        if (this.size > 0) {
            let popped = this.tail;
            if (this.size === 1) {
                this.head = null;
                this.tail = null;
            }
            else {
                this.tail = this.tail.prev;
                this.tail.next = null;
                popped.prev = null;
            }
            this.size--;
            return popped;
        }
    }
    /**
     * Remove the first Node from the lisr
     */
    shift() {
        if (this.size > 0) {
            let shifted = this.head;
            if (this.size === 1) {
                this.head = null;
                this.tail = null;
            }
            else {

                this.head = shifted.next;
                this.head.prev = null;
                shifted.next = null;
            }
            this.size--;
            return shifted;
        }
    }
    /**
     * Add a node at the beginning
     * @param {*} data 
     */
    unshift(data) {
        let newNode = new Node(data);
        if (this.size === 0) return this.push(data);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
        return this;
    }
    /**
     * Return the Node from a specific index
     * @param {*} index The index of the node to be returned
     */
    get(index) {
        if (index < 0 || index > this.size - 1) return undefined;
        let mid = this.size / 2;
        if (index < mid) {
            console.log('Checking from the start');
            let count = 0;
            let node = this.head;
            while (count !== index) {
                node = node.next;
                count++;
            }
            return node;
        }
        else { // index is greater than mid
            console.log('Checking from the end');
            let count = this.size - 1;
            let node = this.tail;
            while (count !== index) {
                node = node.prev;
                count--;
            }
            return node;
        }
    }
    /**
     * Update the Node data from a specific index
     * @param {*} data The new value
     * @param {*} index The destination index
     */
    set(data, index) {
        let node = this.get(index);
        if (node) {
            node.data = data;
            return true
        }
        return false;
    }
    /**
     * Insert a new Node at a particular location
     * @param {*} data 
     * @param {*} index 
     * @returns boolean 
     */
    insert(data, index) {
        if (index === 0) return !!this.unshift(data);
        if (index === this.size - 1) return !!this.push(data);

        let newNode = new Node(data);
        let targetNode = this.get(index);
        if (targetNode) {
            let previous = targetNode.prev
            newNode.prev = previous;
            targetNode.prev = newNode;
            newNode.next = targetNode;
            previous.next = newNode;
            this.size++;
            return true;
        }
    }
    remove(index) {
        if (index === 0) return !!this.shift();
        if (index === this.size - 1) return !!this.pop();

        let node = this.get(index);
        if (node) {
            let previous = node.prev;
            let next = node.next;
            previous.next = next;
            next.prev = previous;
            this.size--;
            node.next = null;
            node.prev = null;
            return node;
        }
    }
    reverse() {
        let temp = this.tail;
        this.tail = this.head;
        this.head = temp;
        while (temp) {
            let next = temp.next;
            let prev = temp.prev;
            temp.prev = next;
            temp.next = prev;
            temp = temp.next;
        }
        return this;
    }
    print() {
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}

let dll = new DoublyLinkedList();


for (i = 1; i <= 4; i++) {
    dll.push(100 + i);
}
console.log(dll.print());
console.log(dll.reverse());
console.log(dll.print());

// console.log(dll.shift())
// console.log(dll.shift())
// console.log(dll);