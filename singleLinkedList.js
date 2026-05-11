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
    
    traverse(){
        var current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;
        }
    }
    
    pop(){
        var prev = this.head;
        var current = this.head;
        
        if(!prev){
            return undefined;
        }
        while(current.next) {
            prev = current;
            current = current.next;
        }
        prev.next = null;
        this.tail = prev;
        this.length-=1;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length-=1;
        if(this.length === 0) this.tail = null;
        return currentHead;
    }
    
    unshift(val) {
        var node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length+=1;
        return this;
    }
    
    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        var counter = 0;
        var current = this.head;
        while(counter !== index) {
            current = current.next;
            counter ++;
        }
        return current;
    }
    
    set(index, val) {
        var foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    
    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
        
    }
    
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift(index);
        if(index === this.length - 1) return this.pop(index);
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        
        return removed;
    }
    
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        
        var next;
        var prev = null;
        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
            
        }
        return this;
    }
    
    print() {
        let current = this.head;
        var arr = [];
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
}

var list = new SinglyLinkedList();

list.push('Hello');
list.unshift('Anindit');

console.log(list.print());
console.log(list.reverse());
console.log(list.print());

// var first = new Node("Hi");
// first.next = new Node("Hi there!");
// first.next.next = new Node("Hi there!");