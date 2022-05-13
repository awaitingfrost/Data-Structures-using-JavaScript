//ReverseString using JS
function reverseString() {
    const len = strings.length; // 15 
    const stack =[];
    for(var i = len; i>=0;i--){
        stack.push(strings[i]);
       }
    const reverseData = stack.join('');
    return reverseData;
    }
const strings = "sagarsubedi1884";
const reverseValue = reverseString(strings);
console.log(reverseValue); //4881idebusragas
const length = reverseValue.length;
console.log(length) // 15

//Time Complexity = O(n) [1 loop for n string]
// Space Complexity = O(n) [n string required n units of memory space]