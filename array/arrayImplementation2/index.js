// MAKING AN OBJECT OF ARRAY AND WE APPLY METHODS LIKE PUSH, POP, DELETE SPECIFIC INDEX (UNSHIFTING OTHERS ITEMS);
class Myarray {
  constructor() {
    this.length = 0;
    this.data = {};

    console.log(this.length);
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;

    this.length++;

    return this.length;
  }
  pop() {
    let lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  // taking index and delete that item and shift rest of the item
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  // method to shift the items by taking index into index+1
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new Myarray();
newArray.push("hi");
newArray.push("sagar");
newArray.delete(1);
console.log(newArray);
