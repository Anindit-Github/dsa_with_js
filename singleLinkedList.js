// piece of data  - val
// reference to next node - next

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
        this.length = 0;
    }
    
    push(val){
        var node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length += 1;
        return this;
    }
}

var list = new SinglyLinkedList();

list.push('Hello');

// var first = new Node("Hi");
// first.next = new Node("Hi there!");
// first.next.next = new Node("Hi there!");