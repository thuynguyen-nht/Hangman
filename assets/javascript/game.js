//variation ================


var winsText = document.getElementById("wins-Text");
var guessTurns = document.getElementById("guessTurns-Text");
var guessesText = document.getElementById("guesses-Text");
var wordInPlayText = document.getElementById("word-Text");
var wins = 0;
var numberGuesses = 10;
var userChoices = [];


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
        //this replay word in play with dashes
        wordInPlay = wordInPlay.replace(/[a-zA-Z]/gi, '-');
        console.log(wordInPlay);
        wordInPlayText.textContent = wordInPlay;
    }
    compRandom();

};

document.onkeyup = function (event) {

    // for (var i = 0; i < userChoices.length) {
    for (var j = 0; j < wordInPlay.length; i++) {

        var userGuesses = event.key.toLocaleUpperCase();

        userChoices.push(userGuesses);

        guessesText.textContent = userChoices;

    };



    // };

};