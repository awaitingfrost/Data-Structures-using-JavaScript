// CHECKING THE INDEX VALUE of an given Array.
class Myarray {
    constructor(data){
        
        this.length = data.length;
        console.log(this.length);
        this.data = data;

    }

  // method for getting the array's value from the given index we provided 
    get(index){
    
      if(index < 0 || index > this.length-1)
      {
        return "WE GET AN WRONG INDEX";
      }
      else return this.data[index]
    }
  
  
}

const theArray = [2,3,7,9,0,2,4,1,4] // defining array
const newArray = new Myarray(theArray); // making instances of class Myarray and defining the new object in newArray variable //
const checkIndex = newArray.get(8); // checking value of index we provide
console.log(checkIndex);

