let num = Number(prompt("Enter a 3-digit number:"));

let digit1 = Math.floor(num / 100);
let digit2 = Math.floor((num % 100) / 10);
let digit3 = num % 10;

let sum = digit1 + digit2 + digit3;

document.write("Sum of digits: " + sum);

//****************************************************** */
let numm = Number(prompt("Enter a 3-digit numberrrr:"));
let summ=0;
while(numm > 0){
    let digit= numm%10;
    summ=summ+digit;
    numm=(numm-digit)/10;
}
document.write("<br>Sum of digits: " + summ);