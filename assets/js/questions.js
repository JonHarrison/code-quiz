"use strict";

// DoM objects
const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices");
const feedback = document.querySelector("#feedback");

// Constants
const wrongAnswerTimePenalty = 10; // lose 10 seconds for an incorrect answer
const questionTimeout = 15; // allow 15 seconds for an answer
const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices : [ "string", "booleans", "alerts", "numbers" ],
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ___________.",
        choices : [ "quotes", "curly brackets", "parenthesis", "square brackets" ],
        answer: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store _________.",
        choices : [ "numbers and strings", "other arrays", "booleans", "all of the above" ],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        choices : [ "commas", "curly brackets", "quotes", "parenthesis" ],
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices : [ "JavaScript", "terminal / bash", "for loops", "console.log" ],
        answer: "console.log"
    },
];
const correct = new Audio("./assets/sfx/correct.wav");
const incorrect = new Audio("./assets/sfx/incorrect.wav");

// Variables
var questionIndex = 0; // current question index in questions array
var entry = {}; // questions array entry used by askQuestions() and checkAnswer()
var timeout = 0; // timeout for answering question

// display current question
function askQuestion() {
    log("askQuestion()");

    // clear any existing question
    questionTitle.innerHTML = "";
    choices.innerHTML = "";

    entry = questions[questionIndex];
    questionTitle.innerHTML = "Q" + (questionIndex+1) + ". " + entry.question;
    var innerHTML = "";
    for(let i=0; i < entry.choices.length; i++) {
        innerHTML += '<button id="' + entry.choices[i] + '" onClick="checkAnswer(this.id,this.textContent)">' + (i+1) + ". " + entry.choices[i] + '</button>' + '\n';
    }
    choices.innerHTML = innerHTML; // update questions all at once; additionally appending DoM innerHTML terminates any open tag

    timeout = setTimeout(tooSlow, 1000 * questionTimeout); // set timeout for answering question
}

// user was too slow and didn't answer question before timeout expired
function tooSlow() {
    log("tooSlow()");
    
    feedback.innerHTML = "A" + (questionIndex+1) + ". " + "Too slow!";
    nextQuestion();
}

// evaluate user answer
function checkAnswer(id,text) {
    log("checkAnswer(" + id + "," + text + ")");
    log("answer : " + entry.answer);

    // reset timeout
    log("clearTimeout()");
    clearTimeout(timeout);
    
    // correct
    if (id === entry.answer)
    {
        feedback.innerHTML = "A" + (questionIndex+1) + ". " + "Correct!";
        score++;
        correct.play();
    }
    // incorrect
    else {
        feedback.innerHTML = "A" + (questionIndex+1) + ". " + "Wrong!";
        secondsLeft -= wrongAnswerTimePenalty; // lose time for an incorrect answer
        incorrect.play();
    }

    // go to next question
    nextQuestion();
}

// next question or end of game
function nextQuestion() {
    log("nextQuestion()");
    
    // next question
    if (++questionIndex < questions.length) // pre-increment then compare with length else at last question
    {
        askQuestion();
    }
    else {
        // game over
        endGame();
    }
}