class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.head.value = value;
    this.length = 0;
    this.tail = this.head;
  }

  append(value) {
    var newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(40);
myLinkedList.append(60);

console.log(myLinkedList);
