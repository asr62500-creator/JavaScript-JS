let arr= [1,2,3,4,5,6,7,8,9,10];
arr.length=20;
let sum=0;
for(let i=0 ; i<arr.length; i++){
    sum+=i;
}
console.log("sum is: ", sum);

console.log("New array: ", arr);
