
//potential cities array        
var cities = [
    "KABUL",
    "NASSAU",
    "BRUSSELS",
    "SANTIAGO",
    "BEIJING",
    "HAVANA",
    "PRAGUE",
    "ATHENS",
    "BAGHDAD",
    "QUITO",
]

var randomCity;

var winningCity;

var userGuess;

var guessedLetter;

var guessedLetterList = [];

var correctGuess;

var incorrectGuess;


function startGame() {
    randomCity = cities[Math.floor(Math.random() * cities.length)];

    var length = randomCity.length;
    // number that will contain number of characters in randomCity

    var dash = " _ " ;

    winningCity = dash.repeat(length);
    console.log(winningCity);
    document.getElementById("winningCity").innerHTML = winningCity;
    };

function captureGuess() {
    userGuess = document.getElementById("userGuess").value;

    document.getElementById("enteredGuess").innerHTML = userGuess; 
    // display their guess

    var guessedLetter = userGuess.toUpperCase();
        //capitalize their guess

//     compare guessedLetter to winningCity but will be comparing a letter to a word? 
};



//  while (length > 0) {
// //displays current state of word being guessed

//     if (guessedLetter === somewhere in the winningCity word) {
//         display it on the screen in the correct spot of winningCity;
//     } else {
//         incorrectGuess++;
//         display it on the screen in the #lettersAlreadyGuessed div/array;
//     }

//     guessedLetterList = list.push(guessedLetter);
//     //add guesses to the guessedList array

//     document.getElementById("#lettersAlreadyGuessed").innerHTML = 
//     guessedList;

//     if (incorrectGuess = 9) {
//         alert("Game over.");
//     }

//  }    

// cities.join(" ");

