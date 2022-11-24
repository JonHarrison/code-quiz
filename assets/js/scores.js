"use strict";

// Inspired by
// https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68
// https://stackoverflow.com/questions/47858518/highscore-in-local-storage-javascript

// DoM objects
var clearButton = document.querySelector("#clear");
const highScoreList = document.querySelector("#highscores");

// Constants
const log = console.log.bind(document);
const NO_OF_HIGH_SCORES = 10;
const HIGH_SCORES = 'highScores';

// Attach event listener to clear button
clearButton.addEventListener("click", function(event) {
    log("clearButton.click event handler");

    // clear local storage
    localStorage.removeItem(HIGH_SCORES);
    // then update DoM
    updateScores();
});

// Update scores on DoM
function updateScores(event) {
    log("updateScores()");

    const highScoreString = localStorage.getItem(HIGH_SCORES);
    const highScores = JSON.parse(highScoreString) ?? []; // null coalescing operator gives initial empty array

    if (highScores.length === 0) {
        highScoreList.innerHTML = "The scoreboard is empty!";
    }
    else {
        highScoreList.innerHTML = highScores
            .map((score) => `<li>${score.initials} - ${score.score}</li>`)
            .join('');
    }
}

// update scores on load
window.addEventListener("load", updateScores);

function unitTestScores() {
    // add some dummy scores as a test
    addScore("AB", 22);
    addScore("CD", 15);
    addScore("EF", 7);
    updateScores();
}
