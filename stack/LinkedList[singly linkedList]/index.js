class Node {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    console.log(newNode);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = this.tail;

      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  peek() {
    return this.top;
  }
}

const list = new SinglyLinkedList();
list.push("hi");
list.push("sagar");

// console.log(list)
