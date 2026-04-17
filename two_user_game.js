let gameNumber1 = parseInt(prompt("Player 1: Enter a secret number between (1-100): "));
alert("pass the device to Player 2");

let gameNumber2 = parseInt(prompt("Player 2: Guess the secret number between (1-100): "));

alert("Game Satrts! Plyers will guess turn by turn until one of them guesses the correct number.");

let guessedByPlayer1 = false;
let guessedByPlayer2 = false;

while(!guessedByPlayer1 && !guessedByPlayer2){
    if(!guessedByPlayer1){
        let guess1 = parseInt(prompt("Player 1: Guess the Player2's number: "));
        if(guess1 < gameNumber2){
            alert("Player 1: Too low! Try again.");
        } else if(guess1 > gameNumber2){
            alert("Player 1: Too high! Try again.");
        } else {
            alert("Congratulations! Player 1 Wins! Correct guess.");
            guessedByPlayer1 = true;
        }
    }   
    if(!guessedByPlayer2){
        let guess2 = parseInt(prompt("Player 2: Guess the Player1's number: "));    
        if(guess2 < gameNumber1){
            alert("Player 2: Too low! Try again.");
        } else if(guess2 > gameNumber1){
            alert("Player 2: Too high! Try again.");
        } else {
            alert("Congratulations! Player 2 Wins! Correct guess.");
            guessedByPlayer2 = true;
        }
}
}   

document.write("<h2>Game Over!</h2>");

document.write("<p>Player 1's number was: " + gameNumber1 + "</p>");
document.write("<p>Player 2's number was: " + gameNumber2 + "</p>");