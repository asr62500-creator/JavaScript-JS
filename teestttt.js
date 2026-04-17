// ---------- PLAYER SETUP WITH VALIDATION ----------

// Player 1 input validation
let gameNumber1;
while (true) {
    gameNumber1 = parseInt(prompt("Player 1: Enter a secret number (1-100):"));
    
    if (!isNaN(gameNumber1) && gameNumber1 >= 1 && gameNumber1 <= 100) {
        break; // valid input → exit loop
    } else {
        alert("Invalid input! Enter a number between 1 and 100.");
    }
}

alert("Pass the device to Player 2");

// Player 2 input validation
let gameNumber2;
while (true) {
    gameNumber2 = parseInt(prompt("Player 2: Enter a secret number (1-100):"));
    
    if (!isNaN(gameNumber2) && gameNumber2 >= 1 && gameNumber2 <= 100) {
        break;
    } else {
        alert("Invalid input! Enter a number between 1 and 100.");
    }
}

alert("Game starts! First to guess correctly wins.");


// ---------- TRACKING ----------
let guessedByPlayer1 = false;
let guessedByPlayer2 = false;


// ---------- GAME LOOP ----------
while (!guessedByPlayer1 && !guessedByPlayer2) {

    // ----- Player 1 turn with validation -----
    let guess1;
    while (true) {
        guess1 = parseInt(prompt("Player 1: Guess Player 2's number:"));

        if (!isNaN(guess1) && guess1 >= 1 && guess1 <= 100) {
            break; // valid guess
        } else {
            alert("Invalid guess! Enter a number between 1 and 100.");
        }
    }

    if (guess1 < gameNumber2) {
        alert("Player 1: Too low!");
    } 
    else if (guess1 > gameNumber2) {
        alert("Player 1: Too high!");
    } 
    else {
        alert("Player 1 Wins! Correct guess.");
        guessedByPlayer1 = true;
        break;
    }


    // ----- Player 2 turn with validation -----
    let guess2;
    while (true) {
        guess2 = parseInt(prompt("Player 2: Guess Player 1's number:"));

        if (!isNaN(guess2) && guess2 >= 1 && guess2 <= 100) {
            break;
        } else {
            alert("Invalid guess! Enter a number between 1 and 100.");
        }
    }

    if (guess2 < gameNumber1) {
        alert("Player 2: Too low!");
    } 
    else if (guess2 > gameNumber1) {
        alert("Player 2: Too high!");
    } 
    else {
        alert("Player 2 Wins! Correct guess.");
        guessedByPlayer2 = true;
        break;
    }
}


// ---------- RESULT ----------
document.write("<h2>Game Over!</h2>");
document.write("<p>Player 1's number was: " + gameNumber1 + "</p>");
document.write("<p>Player 2's number was: " + gameNumber2 + "</p>");