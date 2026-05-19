function start()
{
    // Create empty array of size 5

    let arr = new Array(5);
    
    // Take input from user

    for(let i = 0; i < arr.length; i++)
    {
        arr[i] = prompt("Enter Array Elements:");
    }

    // Print array elements

    document.write(
    "<h2>Created Array elements: </h2>"
    );
    document.write("[");
    for(let i = 0; i < arr.length; i++)
    {
        document.write(arr[i] ,", ");
    }
    document.write("]");
}