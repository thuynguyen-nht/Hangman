//variation ================


var winsText = document.getElementById("wins-Text");
var guessTurns = document.getElementById("guessTurns-Text");
var guessesText = document.getElementById("guesses-Text");
var wordInPlayText = document.getElementById("word-Text");
var wordInPlay = "";
var characters = [];
var array2 = []; //to hold the guessed and "-" during the process.
// var wrongGuesses = [];
var userChoices = [];
var totalCharactersCount = 0;
var wins = 0;
var numberGuesses = 10;


var Choices = {
    justin: {
        picture: "assets\images\bieber-coverstory-square.jpg",
        song: "Illegal Alien",
    },
    adele: {
        picture: "genesis.jpg",
        song: "Illegal Alien",
    },
    madona: {
        picture: "genesis.jpg",
        song: "Illegal Alien"
    },
    taylor: {
        picture: "genesis.jpg",
        song: "Illegal Alien",
    },
    christina: {
        picture: "genesis.jpg",
        song: "Illegal Alien",
    },
    shakira: {
        picture: "genesis.jpg",
        song: "Illegal Alien",
    },
    selena: {
        picture: "genesis.jpg",
        song: "Illegal Alien",
    },
};

// function dashes() {
//     var displayByDashes = "-";
//     var display = displayByDashes.repeat(allCharacters.length);
//     wordInPlayText.textContent = display;
// };

function beginGame() {

    //this will call out the whole array ["justin", "adele", "madona", "taylor", "christina", "shakira", "selena"]
    var computerGuesses = Object.keys(Choices);
    console.log(computerGuesses);
    //this will ask computer to random choose 1 of word in the array "justin"
    wordInPlay = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];
    console.log(wordInPlay);
    var characters = wordInPlay.split("");
    console.log(characters);

    //have to pass the length of characters.length to global variables in other to use on other function
    //
    totalCharactersCount = characters.length;

    //reset game to new round
    numberGuesses = 10;
    // wrongGuesses = [];
    array2 = [];
    userChoices = [];

    //can use totalCharactersCount here but purposely use charac.length to show that under the same function beginGame it can be used.
    for (var i = 0; i < characters.length; i++) {
        array2.push("-");
    }
    //join to make the comma in array replace with blank space.
    wordInPlayText.textContent = array2.join(" ");
    guessTurns.textContent = numberGuesses;
    winsText.textContent = wins;
};

function charactersCheck(letter) {
    //this first for loop, this is to check if the letter is in the wordInPlay at all
    var letterInWord = false;
    //make it false so when it true in the next function, so it can run
    for (var i = 0; i < totalCharactersCount; i++) {
        //dont use characters instead of wordInPlay.
        if (wordInPlay[i] == letter) {
            letterInWord = true;

        };
    };
    if (letterInWord) {
        for (var i = 0; i < totalCharactersCount; i++) {
            if (wordInPlay[i] == letter) {
                array2[i] = letter;
                console.log("Received letter");
            }
        }
    } else {
        //this numberGuesses only being substract if the letter is wrong
        // wrongGuesses.push(letter);
        numberGuesses--;
        guessTurns.textContent = numberGuesses;

    };
    console.log(array2);
};

function roundReset() {
    if (numberGuesses == 0) {
        alert("You lost!");
        beginGame();
    };

    if (characters.toString() == array2.toString()) {
        wins++;
        alert("Awsome!");
        winsText.textContent = wins;
        beginGame();
    }
    wordInPlayText.textContent = array2.join(" ");
}

///WHERE TO GAME START TO RUN============
beginGame();

document.onkeyup = function (event) {
    var userGuesses = event.key.toLowerCase();
    userChoices.push(userGuesses);
    guessesText.textContent = userChoices;

    //call function charactersCheck.
    charactersCheck(userGuesses);
    roundReset();

};