//variation ================


var winsText = document.getElementById("wins-Text");
var guessTurns = document.getElementById("guessTurns-Text");
var guessesText = document.getElementById("guesses-Text");
var wordInPlayText = document.getElementById("word-Text");
var pictureOfSinger = document.getElementById("imgOfSinger");
var songName = document.getElementById("song-name");
var wordInPlay = "";
var characters = [];
var array2 = []; //to hold the guessed and "-" during the process.
var userChoices = [];
var totalCharactersCount = 0;
var wins = 0;
var numberGuesses = 10;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var Choices = {
    justin: {
        picture: "assets/images/justin.jpg",
        song: "Baby Baby",
        play: "https://jk9nj200-a.akamaihd.net/downloads/ringtones/files/mp3/baby-justin-bieber-41888.mp3"
    },
    adele: {
        picture: "assets/images/adele.jpg",
        song: "Someone Like You",
    },
    ladygaga: {
        picture: "assets/images/ladyGaga.jpg",
        song: "Bad Romance"
    },
    taylor: {
        picture: "assets/images/taylor.jpg",
        song: "Bad Blood",
    },
    christina: {
        picture: "assets/images/christina.jpg",
        song: "A Thousand Years",
    },
    shakira: {
        picture: "assets/images/shakira.jpg",
        song: "Waka Waka",
    },
    selena: {
        picture: "assets/images/selenaGomez.jpg",
        song: "Hands to Myself",
    },
};

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

    var checkAlphabet = false;

    if (alphabet.indexOf(letter) !== -1) {
        checkAlphabet = true;

    };

    if (letterInWord) {
        for (var i = 0; i < totalCharactersCount; i++) {
            if (wordInPlay[i] == letter) {
                array2[i] = letter;
            }
        }
    } else if (checkAlphabet) {
        //this numberGuesses only being substract if the letter is wrong

        numberGuesses--;
        guessTurns.textContent = numberGuesses;

    };
    console.log(array2);
};

function roundReset() {
    console.log("win " + wins + " guessleft " + numberGuesses);
    var win;
    //check if user has done guesses. If they not done win is set to be false.
    if (array2.length === 0) {
        win = false;
    }
    // Otherwise, we set win to true.
    else {
        win = true;
    }

    // Check if the letter is in the array, (=== -1) shows if the letter cannot be found. This prevent user to win if he not done guessing.

    for (var i = 0; i < totalCharactersCount; i++) {
        if (array2.indexOf(wordInPlay[i]) === -1) {
            win = false;
        }
    }

    if (win === true) {
        wins++;
        winsText.textContent = wins;
        console.log("Awsome!");
        songName.textContent = Choices[wordInPlay].song;

        pictureOfSinger.src = Choices[wordInPlay].picture;

        //the browser will wait for 1 second before beginGame fucntion run.
        setTimeout(beginGame, 3000);

    }

    if (numberGuesses == 0) {
        alert("You lost!. The correct answer is " + wordInPlay);
        // setTimeout(beginGame, 1000);
        beginGame();

    };
    wordInPlayText.textContent = array2.join(" ");

}

///WHERE TO GAME START TO RUN============
beginGame();

document.onkeyup = function (event) {

    //check if the key is in alphabet;

    var userGuesses = event.key.toLowerCase();

    var checkAlphabet = false;

    if (alphabet.indexOf(userGuesses) !== -1) {
        checkAlphabet = true;

    };
    if (checkAlphabet) {

        userChoices.push(userGuesses);
        guessesText.textContent = userChoices;
    }


    //call function charactersCheck.
    charactersCheck(userGuesses);
    roundReset();


};