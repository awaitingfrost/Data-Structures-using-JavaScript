class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    var newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.last = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

var stack = new Stack();
stack.push("sagar");
stack.push("subedi");
stack.pop();

//time complexity for push O(1)
// time complexity for pop O(1)
