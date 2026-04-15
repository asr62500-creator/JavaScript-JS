let num = prompt("Enter the number:");

if (num%5===0){
    console.log(num , "is multiple of 5");
    document.write(num , " is multiple of 5");  
}
else{
    console.log(num , "is not multiple of 5");
    document.write(num , " is not multiple of 5");
}

//***************************By Ternary Operator*************************** */
let result= (num%5===0) ? (num + " is multiple of 5") : (num + " is not multiple of 5");

console.log(result);
document.write("</br>" + result);