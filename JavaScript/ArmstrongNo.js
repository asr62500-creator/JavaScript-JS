for (let num = 100; num <= 500; num++) {

    let original = num;   // store original number
    let sum = 0;

    // Extract digits
    while (original > 0) {

        let digit = original % 10; // last digit
        sum += digit * digit * digit; //or sum=sum+(digit**3)   // cube of digit
        original = Math.floor(original / 10); // remove last digit
    }

    // Check Armstrong condition
    if (sum === num) {
        console.log(num + " is Armstrong");
    }
}