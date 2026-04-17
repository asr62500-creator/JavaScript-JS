let arr=[1,2,3,3,3,3,4,5,6,7,8,9,10];
//push()=> adds an element at the end of the array
arr.push(6);
console.log(arr);
document.write("[", arr , "]" , "<br>");
//pop()=> removes the last element of the array
arr.pop();
console.log(arr);
document.write("[", arr , "]" , "<br>");
//unshift()=> adds an element at the beginning of the array
arr.unshift(100);
console.log(arr);
document.write("[", arr , "]" , "<br>");
//shift()=> removes the first element of the array
arr.shift();
console.log(arr);
document.write("[", arr , "]" , "<br>");   
//indexOf()=> returns the index of the first occurrence of a specified value in the array, or -1 if it is not found.
let index=arr.indexOf(3);
console.log(index);
document.write("[", index , "]" , "<br>");
//lastIndexOf()=> returns the index of the last occurrence of a specified value in the array, or -1 if it is not found.
let lastIndex=arr.lastIndexOf(3);
console.log(lastIndex);
document.write("[", lastIndex , "]" , "<br>");
//includes()=> determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let hasValue=arr.includes(3);
console.log(hasValue);
document.write("[", hasValue , "]" , "<br>");
//slice()=> returns a shallow copy of a portion of an array into a new array object selected from 
//          start to end (end not included) where start and end represent the index of items in that array. 
//           The original array will not be modified.
let copyArr=arr.slice(1,3);
console.log(copyArr);
document.write("[", copyArr , "]" , "<br>");
//splice()=> changes the contents of an array ;
//             by adding new elements in place,and
//             by removing, or replacing the existing elements .
arr.splice(2,5);//delete or remove 5 elements from index 2
console.log(arr);
document.write("[", arr , "]" , "<br>");
arr.splice(2,0,300,300,300,300,400);
console.log(arr);//add 5 elements at index 2 without deleting any element
document.write("[", arr , "]" , "<br>");
arr.splice(2,5,3,3,3,3,4);
console.log(arr);//replace 5 elements at index 2 with 5 new elements
document.write("[", arr , "]" , "<br>");
arr.splice(2,5,333,333,333,333,444,555,666,777,888,999);
console.log(arr);//delete 5 elements at index 2 and add 10 new elements at index 2
document.write("[", arr , "]" , "<br>");