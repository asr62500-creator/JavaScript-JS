let num = Number(prompt("Enter a number:"));
let isPrime = true;

// 0 and 1 are not prime
if (num <= 1) {
    isPrime = false;
}
else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;  // divisible → not prime
            break;
        }
    }
}

// Output
if (isPrime){
    console.log(num , " is a Prime number");
    document.write(num , " is a Prime number");
}
else {
    console.log(num , " is NOT a Prime number");
    document.write(num , " is NOT a Prime number");
}
