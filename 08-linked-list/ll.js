
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Insert data at the end of the list
     * @param {*} data information you want to store in the list
     * @returns the updated list
     */
    push(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return this;
    }

    /**
     * Remove the last node from the list
     * @returns The update list
     */
    pop() {
        if (this.size === 0) return null;
        if (this.size === 1) {
            return this.shift();
        }

        let current = this.head;
        let previous = current;
        while (current.next) {
            previous = current;
            current = current.next;
        }

        this.tail = previous;
        this.tail.next = null;
        this.size--;
        return this;
    }
    /**
     * Remove the first node from the list
     * @returns The updated list
     */
    shift() {
        if (this.size <= 0) return false;
        this.head = this.head.next;
        this.size--;
        if (this.size === 0) this.tail = null;
        return this;
    }
    /**
     * Return the node based on its index
     * @param {*} index of the required node
     * @returns the node at the given index
     */
    get(index) {
        if (index < 0 || this.size === 0 || index > this.size - 1) return null;
        let current = this.head;
        let i = 0;
        while (i !== index) {
            current = current.next;
            i++;
        }
        return current;
    }
    /**
     * Update a node at a specific index
     * @param {*} index of node which we need to update
     * @param {*} val the value which we need to update
     * @returns 
     */
    set(index, val) {
        let node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }
    /**
     * Add the node as a head
     * @returns The updated list
     */
    unshift(val) {
        if (this.size === 0) {
            return this.push(val)
        }
        else {
            var newNode = new Node(val);
            newNode.next = this.head;
            this.head = newNode;
            this.size++;
            return this;
        }

    }
    /**
     * Remove a node from a specific 0 based index
     * @param {*} index of the node
     * @returns a boolean value
     */
    remove(index) {
        if (index < 0 || this.size === 0 || index > this.size - 1) return null;
        if (index === 0) {
            return !!this.shift();
        }
        if (index === this.size - 1) {
            return !!this.pop();
        }
        else {
            let previous = this.get(index - 1);
            let current = previous.next;
            previous.next = current.next;
            this.size--;
            return true;
        }
    }
    /**
     * Insert a node at a random location
     * @param {*} val A value to be inserted
     * @param {*} index where insertion would take place
     * @returns
     */
    insert(val, index) {
        if (index < 0 || index > this.size) return false;

        if (index === 0) {
            return !!this.unshift(val);
        }
        if (index === this.size) {
            return !!this.push(val);
        }

        let previous = this.get(index - 1);
        let current = previous.next;
        let newNode = new Node(val);
        newNode.next = current;
        previous.next = newNode;
        return true
    }
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var previous = null;
        let i = 0;
        while (i < this.size) {
            next = node.next;
            node.next = previous;
            previous = node;
            node = next;
            i++;
        }
    }
    /**
     * Reverse a linked list recursively
     * @param {*} head node
     * @param {*} tail node
     * @param {*} next next node counter
     * @param {*} previous prevous node counter
     */
    reverseRecursive(pre = null, curr = this.head) {
        if (curr.next) {
            this.reverseRecursive(curr, curr.next)
        }
        else {
            this.tail = this.head;
            this.head = curr;
        }
        curr.next = pre;
    }

    /// Print list data
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
for (i = 1; i <= 5; i++) {
    ll.push(100 + i);
}

ll.print();

console.log('The final output');
console.log(ll.reverseRecursive());
ll.print();

