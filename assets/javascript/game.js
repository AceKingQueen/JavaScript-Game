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
];

var randomCity = "";

var lettersRandomCity = [];
//randomCity from words to an array

var blanks = 0;

var midTurn = [];
//a way to show progress, some letters guessed right so far

var incorrectGuesses = [];

var guessedLetter = "";

var winTally = 0;
var lossTally = 0;
var numGuesses = 9;





function startGame() {

    
    numGuesses = 9;
    //start with maximum number of guesses

    randomCity = cities[Math.floor(Math.random() * cities.length)];
    console.log(randomCity);


    letterRandomCity = randomCity.split("");
    //going from word to letters

    blanks = letterRandomCity.length;


    // console.log(randomCity);
    


    midTurn = [];

    

    incorrectGuesses = [];



    for (var j = 0; j < blanks; j++) {
        midTurn.push("_");
    }




    document.getElementById("guesses-left").innerHTML = numGuesses;


    document.getElementById("winningCity").innerHTML = 
    midTurn.join(" ");
}







function checkLetters(letter) {
    
    
    
    var letterInWord = false;


    for (var p = 0; p < blanks; p++) {
        
        if (randomCity[p] === letter) {



            letterinWord = true;
        }
    }



    if (letterinWord = false) {


        for (var x = 0; x < blanks; x++) {


            if (chosenWord[x] === letter) {



                midTurn[x] = letter;
            }
        }


        console.log(midTurn);
    }


    else {


        incorrectGuesses.push(letter);


        numGuesses--;

    }

}



function roundComplete() {









document.getElementById("guesses-left").innerHTML = numGuesses;


document.getElementById("word-blanks").innerHTML = midTurn.join(" ");


document.getElementById("incorrectLetters").innerHTML = incorrectGuesses.join(" ");



if (lettersRandomCity.toString() === midTurn.toString()) {
    
    
    winTally++;


    alert("You win!");


    document.getElementById("win-counter").innerHTML = winTally;


    startGame();
}



else if (numGuesses === 0) {

    lossTally++;

    alert("You lose");



    document.getElementById("loss-counter").innerHTML = lossTally;


    startGame();
}
}

startGame();


document.onkeyup = function(event) {


    guessedLetter = String.fromCharCode(event.which).toUpperCase();

    checkLetters(guessedLetter);

    roundComplete();
}

