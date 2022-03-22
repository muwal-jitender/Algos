// https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0
// https://www.educative.io/courses/step-up-your-js-a-comprehensive-guide-to-intermediate-javascript/7nAZrnYW9rG
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        /**
         * The length of the list
         */
        this.length = 0
    }
    /**
     * Push the value to the list
     * @param {*} val the data to be inserted
     * @returns the list
     */
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }
    /**
     * Remove the last node
     */
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let previous = current;

        while (current.next) {
            previous = current;
            current = current.next;
        }
        this.tail = previous;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    /**
      * Remove the first node from the list
      * @returns The updated list
      */
    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return current;
    }

    /**
     * Add a new node as the head node.
     * @param val value of the new node.
     */
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    remove(index) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) {
            this.shift();
        }
        if (index === this.length - 1) {
            this.pop();
        }

        let previous = this.get(index - 1);
        let removed = previous.next;
        previous.next = remove.next;
        this.length--;
        return removed;
    }
    // Get the node from a specific index
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let node = this.head
        let i = 0;
        while (i !== index) {
            node = node.next;
            i++;
        }
        return node;
    }
    // Update a node at a specific index
    set(index, val) {
        let node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }
    // Add a new node a specific position
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) {
            return !!this.push(val);
        }
        if (index === 0) {
            return !!this.unshift(val);
        }

        let newNode = new Node(val);
        let previous = this.get(index - 1);
        let current = previous.next;

        newNode.next = current;
        previous.next = newNode;
        this.length++;
        return true;
    }
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var previous = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = previous;
            previous = node;
            node = next;
        }
    }
    print() {
        var arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}
// const node = new Node('Hi');
// node.next = new Node('Jitender');
// node.next.next = new Node('Muwal');
// console.log(node);
//console.time();
var sl = new SinglyLinkedList();

sl.push(101);
sl.push(102);
sl.push(103);
sl.push(104);
//sl.push(105);


//sl.reverse();
console.log(`The final output`);
sl.reverse();

sl.print();