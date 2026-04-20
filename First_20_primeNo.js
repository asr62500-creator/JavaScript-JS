let count = 0;   // count no of primes found
let num = 2;     // start from first prime

while (count < 20) {
    
    let isPrime = true;

    // Check if current number is prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    // If prime → print and increment count
    if (isPrime) {
        console.log(num);
        count++;
    }

    num++; // move to next number
}