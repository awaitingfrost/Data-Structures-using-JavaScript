//  stack implementation using array
class Stack {
  constructor() {
    this.array = [];
  }
  // view the last element in the stack
  peek() {
    return this.array[this.array.length - 1];
  }
  // push the provided value or element in the stack
  push(value) {
    return this.array.push(value);
  }

  //   pop the element or value from the stack
  pop() {
    if (this.array.length > 0) {
      return this.array.pop();
    }
  }
}

const stack = new Stack();
stack.push("javascript"); //["javascript"]
stack.push("python"); //["javascript","python"]
stack.push("c++");
stack.push("reactjs");
stack.push(" node.js");
console.log(stack.array); // ["javascript","python","c++","reactjs","node.js"]
stack.pop(); // ["javascript","python","c++","reactjs"]
stack.pop(); //["javascript","python","c++"]
console.log(stack.items);
["javascript", "python", "c++"];
