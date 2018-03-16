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


    letterRandomCity = randomCity.split("");
    //going from word to letters

    blanks = letterRandomCity.length;


    console.log(randomCity);
    


    var midTurn = [];

    

    var incorrectGuesses = [];



    for (var j = 0; j < blanks; j++) {
        midTurn.push("_");
    }


    console.log(midTurn);


    document.getElementByID("guesses-left").innerHTML = numGuesses;


    document.getElementByID("winningCity").innerHTML = midTurn.join(" ");
}







function checkLetters (letter) {
    
    
    
    var letterInWord = false;


    for (var p = 0; p < blanks; p++) {
        
        if (randomCity[j] === letter) {



            letterinWord = true;
        }
    }



    if (letterinWord) {


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









document.getElementByID("guesses-left").innerHTML = numGuesses;


document.getElementByID("word-blanks").innerHTML = midTurn.join(" ");


document.getElementByID("incorrectLetters").innerHTML = incorrectGuesses.join(" ");



if (lettersRandomCity.toString() === midTurn.toString()) {
    
    
    winTally++;


    alert("You win!");


    document.getElementByID("win-counter").innerHTML = winTally;


    startGame();
}



else if (numGuesses === 0) {

    lossTally++;

    alert("You lose");



    document.getElementByID("loss-counter").innerHTML = lossTally;


    startGame();
}
}

startGame();


document.onkeyup = function(event) {


    guessedLetter = String.fromCharCode(event.which).toUpperCase();

    checkLetters(guessedLetter);

    roundComplete();
}

