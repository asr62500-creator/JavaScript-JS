let gameNumber1 = 25;

let userNumber = parseInt(prompt("Guess a number between 1 and 100: "));

while(userNumber !== gameNumber1){
    if(userNumber < gameNumber1){
        alert("Too low! Try again.");
        userNumber = parseInt(prompt("Wrong guess! Guess a higher number less than or equal to 100: "));
    }
    else if(userNumber > gameNumber1){
        alert("Too high! Try again.");
        userNumber = parseInt(prompt("Wrong guess! Guess a lower number greater than or equal to 1: "));
    }
    else
    {
        userNumber = parseInt(prompt("You entered an invalid number", "Guess a number between 1 and 100: "));
    }
}
alert("Congratulations! You guessed the number.");