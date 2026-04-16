for (let i=1; i<=100; i++){
    if (i%2===0){
        console.log(i);
        document.write(i , " | ");
    }
}

let num=Number(prompt("Enter a number:"));
if (num%2===0){
        console.log(num, " is even number");
        document.write("<br>" , num , " is even number ");
}
 else{
        console.log(num, " is odd number");
        document.write("<br>" , num , " is odd number ");
}   