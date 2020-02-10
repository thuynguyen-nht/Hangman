//variation ================


var winsText = document.getElementById("wins-Text");
var guessTurns = document.getElementById("guessTurns-Text");
var guessesText = document.getElementById("guesses-Text");
var wordInPlayText = document.getElementById("word-Text");
var wins = 0;
var numberGuesses = 10;
var userChoices = [];
var allCharacters = [];
var Array2 = [];
var Array3 = [];


var Choices = {
    justin: {
        picture: "genesis.jpg",
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

window.onload = function () {

    function compRandom() {
        //this will call out the whole array ["justin", "adele", "madona", "taylor", "christina", "shakira", "selena"]
        var computerGuesses = Object.keys(Choices);
        //this will ask computer to random choose 1 of word in the array "justin"
        var wordInPlay = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];
        console.log(computerGuesses);
        console.log(wordInPlay);
        var characters = wordInPlay.split("");
        allCharacters = characters;

        console.log(characters);
        console.log(allCharacters);
        //this replay word in play with dashes

        dashes();


        // var Array3 = displayByDashes.repeat(allCharacters.length);
        // console.log(Array3);
    };
    compRandom();

    function dashes() {
        var displayByDashes = "-";
        var Array2 = displayByDashes.repeat(allCharacters.length);
        wordInPlayText.textContent = Array2;
    };

    document.onkeyup = function (event) {


        var userGuesses = event.key.toLowerCase();
        userChoices.push(userGuesses);
        guessesText.textContent = userChoices;
        console.log(allCharacters);

        for (var i = 0; i < allCharacters.length; i++) {
            if (userGuesses === allCharacters[i]) {
                Array2[i] = userGuesses;

            };
            console.log(Array2);

        };
        if (Array2 === allCharacters) {
            wins++;
            winsText.textContent = wins;
        };
        console.log(Array2);

        numberGuesses--;
        guessTurns.textContent = numberGuesses;
        wordInPlayText.textContent = Array2;

    };
};