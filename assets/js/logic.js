"use strict";

// DoM objects
const startButton = document.querySelector("#start");
const questionsScreen = document.querySelector("#questions");
const startScreen = document.querySelector("#start-screen");
const endScreen = document.querySelector("#end-screen");
const timerElement = document.querySelector("#time");
const finalScore = document.querySelector("#final-score");
const submitButton = document.querySelector("#submit");
const initials = document.querySelector("#initials");

// Constants
// QUIZ_DURATION is in questions.js
const NO_OF_HIGH_SCORES = 10;
const HIGH_SCORES = 'highScores';

// localStorage
const highScoreString = localStorage.getItem(HIGH_SCORES);
const highScores = JSON.parse(highScoreString) ?? []; // null coalescing operator gives initial empty array

// Variables
var timer; // holds time
var secondsLeft; // seconds remaining in quiz
var score = 0; // user's score

// The setTimer function starts and stops the timer and triggers endGame()
function startTimer() {
    log("startTimer()");
    // Sets timer
    timer = setInterval(function () {
        secondsLeft--;
        timerElement.textContent = secondsLeft;
        // Tests if time has run out
        if (secondsLeft <= 0) {
            // // Clears interval
            // clearInterval(timer);
            endGame();
        }
    }, 1000);

}

// Attach event listener to start button to implement startGame function on click
startButton.addEventListener("click", function(event) {
    log("startButton.click event handler");

    // stop user clicking button again whilst game is being played (re-enabled once game is ended)
    startButton.disabled = true;
  
    // reset score
    score = 0;

    secondsLeft = QUIZ_DURATION; // total time allowed per game
    startTimer();

    // hide start, show questions and feedback
    startScreen.classList.add("hide");
    questionsScreen.classList.remove("hide");
    feedback.classList.remove("hide");

    // ask the first question
    askQuestion();
});

// end game because user answered all the questions or ran out of time
function endGame() {
    log("endGame()");

    // hide questions , show end
    questionsScreen.classList.add("hide");
    endScreen.classList.remove("hide");

    clearInterval(timer); // stop setInterval timer

    score += secondsLeft; // add on remaining time
    updateTextElement(finalScore,score); // update score on DoM

    // re-enable start button
    startButton.disabled = false;

}

// submit score
submitButton.addEventListener("click", function(event) {
    log("submitButton.click event handler");
    var response = initials.value;
    if (response === "")
    {
        addScore("anonymous", score);
    }
    else {
        addScore(response, score);
    }
    // navigate to the highscore table
    window.location.replace("highscores.html");
});

// Add a new score
function addScore(initials, score) {
    log("addScore(" + initials + "," + score + ")");

    const newScore = { initials, score };
    
    // Add new score to list
    highScores.push(newScore);

    // (Re)sort the list by score descending
    highScores.sort((a, b) => b.score - a.score);

    // Select new list from the top NO_OF_HIGH_SCORES (if there are two many entries lowest scores effectively drop off the bottom)
    highScores.splice(NO_OF_HIGH_SCORES);

    // Save to local storage
    localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
}
