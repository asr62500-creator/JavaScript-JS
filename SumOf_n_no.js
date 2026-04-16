let sum = 0;

// Convert input to number
let num = parseInt(prompt("Enter a number:"));

// Loop method
for (let i = 1; i <= num; i++) {
  sum = sum + i;
}

// Formula method
let sum1 = (num * (num + 1)) / 2;

// Output
console.log("Sum using Loop :", sum);
console.log("Sum using Formula :", sum1);
console.log("Loop Ended");

document.write("Sum using Loop : " + sum);
document.write("<br>Sum using Formula : " + sum1);
document.write("<br>Loop Ended");