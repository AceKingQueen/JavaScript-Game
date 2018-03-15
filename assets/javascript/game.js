
// $(document).ready(function() {


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

var randomCity;

var winningCity;

var userGuess;

var guessedLetter;

var guessedLetterList = [];

var correctGuess;

var incorrectGuess;

// var letters = [
//     "A", "B", "C", "D", "E", "F", "G", "H", "I",
//     "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
//     "S", "T", "U", "V", "W", "X", "Y", "Z", "_"
// ];

// var main = $("body");

// var btns = main.find("#buttons");

// for (var i = 0; i < letters.length; i++) {
//     var letterBtn = $("<button>");
//     letterBtn.addClass("letter-button letter letter-button-color");
//     letterBtn.attr("data-letter", letters[i]);
//     letterBtn.text(letters[i]);
//     btns.append(letterBtn);
// }

// btns.on("click", ".letter-button", function() {
//     var fridgeMagnet = $("<div>");
//     fridgeMagnet.addClass("letter fridge-color");
//     fridgeMagnet.text($(this).attr("data-letter"));
//     main.find("#display").append(fridgeMagnet);
// });

// main.on("click", "#clear", function() {
//     main.find("#display").empty();
// });

function startGame() {
    randomCity = cities[Math.floor(Math.random() * cities.length)];

    var length = randomCity.length;
    // number that will contain number of characters in randomCity

    var dash = " _ " ;

    winningCity = dash.repeat(length);

    document.getElementById("winningCity").innerHTML = winningCity;

    }


function captureGuess() {
    userGuess = document.getElementById("userGuess").value;

    document.getElementById("enteredGuess").innerHTML = userGuess; 
    // display their guess

    var guessedLetter = userGuess.toUpperCase();
        //capitalize their guess
}

function compareGuess() {

    var characterList = winningCity.split();
    // break up winningCity into array
    var j;

    // for (j = 0; j < characterList.length; j++) {
        // if (guessedLetter !==
    }







// loop through winningCity.length

// if guessedLetter doesn't match any of the winningCity.length, display it at #lettersAlreadyGuessed
// add one to value
// once value = 9, game over

// else create new variable, replace string using string (W3 schools) & display it at #display



    // });