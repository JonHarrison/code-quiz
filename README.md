# Module 6 Challenge Web APIs: Code Quiz

## Title

A timed multiple-choice quiz featuring dynamically updated HTML and CSS powered by JavaScript.

## User Story

AS A coding boot camp student<br>
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores<br>
SO THAT I can gauge my progress compared to my peers<br>

## Acceptance Criteria

IT IS DONE when 

  * When a start button is clicked a timer starts and the first question appears.
    * Questions contain buttons for each answer
    * When an answer is clicked, the next question appears
    * If the answer clicked was incorrect then time is subtracted from the clock
  * The quiz ends when all questions are answered or the timer reaches 0.
    * When the game ends, the player is shown their score and given the ability to save their initials and their score
  
## Tasks Completed

* Implemented the required solution in Javascript
* Divided implementation into multiple functions across multiple files
* Navigate through the quiz flow (start/questions/end) by tagging div elements with a hide class
* Play correct/incorrect wav files using the Audio class
* Allow 75 seconds for quiz, 15 seconds per question (5 questions), player is told if they are too slow in answering a question, penalty is 10 seconds for an incorrect answer, adds 1 to score for a correct answer and add any remaining time to score at the end
* Maintains a (sorted) list of the 10 highest scores
* The player is shown whether their answer is correct or incorrect (visually and audibly)

## Challenges / Things I learnt

* Use of querySelector
* Use of get/setAttribute for data-*
* use of classList.add/remove for 'hide'
* Use of setInterval and clearInterval
* Playing wav files using the Audio class
* innerHTML and alterative methods of setting html elements
* Using map to translate array objects onto html <pre><li> and <button></pre> elements
* JSON.parse and JSON.stringify for maintaining a single localStorage element for the high score table
* Use of ?? [] null coalescing operator
* Use of splice for the top n highscore elements
* Handing events and using event properties (target)

## Website image



## Technologies Used

- HTML
- CSS
- Javascript

## Links

* [Link to the deployed website](https://jonharrison.github.io/code-quiz/)
* [Link to the code repository](https://github.com/JonHarrison/code-quiz)

## Contact

If you have any questions, please contact me at :

* GitHub profile : [JonHarrison](https://github.com/JonHarrison)
* Email : [******]()
* LinkedIn : [******]()
