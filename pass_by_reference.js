// Main function
function start() {

    // Create an array
    let a = [1, 2, 3, 4, 5];

    // Print original array
    outputArray("Original array:", a);

      modifyArray(a);   // Pass array to function
                        // Arrays are passed as reference (same memory is used)

    // After modification, original array is changed
    outputArray("After modification:", a);

    // Access 4th element (index 3)
    console.log("4th element before passing:", a[3]);

    // Pass single element (primitive value)
    // Only the value (copy) is passed, not reference
    modifyElement(a[3]);

    // Original value remains unchanged
    console.log("4th element after passing:", a[3]);
}

// Function to print array elements
function outputArray(msg, arr) {

    console.log(msg, arr.join(" "));  // join(" ") converts array into string with space between elements
}    

// Function to modify entire array
function modifyArray(arr) {

    // for...in loop gives index of array
    for (let i in arr) {

         arr[i] *= 2;    // Multiply each element by 2
                         // Since arr is reference to original array,
                        // changes affect the original array
    }
}

// Function to modify a single value
function modifyElement(e) {

     e *= 2;   // e is a copy of the value passed (primitive)
        // This does NOT affect original array element
    
    // Only local value changes
    console.log("Value inside modifyElement:", e);
}