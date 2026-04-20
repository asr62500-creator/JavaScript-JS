// print all prime numbers between 1 and 100

for(let num = 2; num <= 100; num++) {

    let isPrime = true;

    // Check if current number is prime
    for(let i=2 ; i <=Math.sqrt(num) ; i++) {
        if(num%i === 0) {
            isPrime = false;
            break;
        }
    }

    // If prime → print
    if (isPrime) {
        console.log(num);
    }
}   