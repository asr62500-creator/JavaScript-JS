let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum =0;
for(let i=0; i<arr.length; i++){
    sum = sum + arr[i];
}   
console.log(sum);
document.write("Sum of elements of array is: " + sum);


// for(let val of arr){
//     sum = sum + val;
// }       
// console.log(sum);
// document.write("<br>Sum of elements of array is: " + sum);