//I've chosen to leave in the following declarations to remind myself to ask for help in understanding 
//of why I had such a hard understanding scope in the homework assignment. Having to assign each text
//element to its variable each time it was being used did not seem like the correct solution,
//and added much unnecessary code.

//declaring all the variables targeting elements the changing variable will appear
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("gLeft");
var guessesCountText = document.getElementById("guessesCount");

//variables holding the wins and losses
var wins = 0;
var losses = 0;
var maxLosses = 3;
var guessesLeft = 9;
var guesses = 0;

//array of the possible choices by the computer
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", 
"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
"t", "u", "v", "w", "x", "y", "z"];

    //the function contains everything that occurs upon the keyup event
    document.onkeyup = function(event){
       
        //declaring the main variable of which we will compare to initiate our
        //if statements, randomly generated letter, and the players input
        var psyChoice = letters[Math.floor(Math.random() * letters.length)];
        var guess = event.key;
        console.log(guess);
        console.log(psyChoice);

        //Our first and all encompassing if statement
        //testing if the input is equal to the computers generation
        if(psyChoice === guess){
            
            //if they are equal, the guesses so far element for recording the inputs is reset
            //as well as the guessesleft variable being reset to 9, and updating the wins
            wins++;
            var winsText = document.getElementById("wins").textContent = "Wins: " + wins;
            var guessesCountText = document.getElementById("guessesCount").textContent = "Your Guesses so far: ";
            guessesLeft = 10;
            
            
        
        }

        //If not equal, the guess is recorded and appended, and the amount of remaining guesses lowers
        else {
            guessesLeft--;
            var guessesLeftText = document.getElementById("gLeft").textContent = "Guesses Left: " + guessesLeft;
            var guessesCountText = document.getElementById("guessesCount").innerHTML += guess + ", ";

            //If a guess has not been equal to the computers letter before the allowed guesses hits
            //0, all is once again reset but for wins, and lossses inscreases, as well as maximum
            //acceptable losses lowering
            if (guessesLeft === 0) {
                guessesLeft = 10;
                losses++;
                maxLosses--;
                var lossesText = document.getElementById("losses").textContent = "Losses: " + losses;
                var guessesCountText = document.getElementById("guessesCount").textContent = "Your Guesses so far: ";

                //If maxLosses reaches 0, an alert tells the user Game Over
                if (maxLosses === 0) {
                    alert("Game Over");
                }
            }
        }

        

    
 }

