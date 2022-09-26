var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
]

var score = 0

//This is which number in my index I am on
var questionNumber = 0
questionNumber++

var currentTime = document.querySelector(".currentTime");
var timer = document.querySelector(".startTime");
var questionsDiv = document.querySelector(".questionsDiv");
var Navwrapper = document.querySelector(".Navwrapper");
var ulCreate = document.createElement("ul");


function displayChoices(questionNumber) {
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    var choices = questions[questionNumber].choices
    var question = questions[questionNumber].title
    for (let i = 0; i < choices.length; i++) {
        console.log(choices[i])
        questionsDiv.textContent = userQuestion;
    }
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    },


// displayQuestion()

// displayChoices()

//Get to display on page

//Get to get to post on page


//finish quiz

if (questionNumber = questions.length) {
        allDone();
        createDiv.textContent = "End of quiz!";
    } else {
        populastQuestion(questionNumber);
    }
    questionsDiv.appendChild(createDiv);
}

//timer
var secondsLeft = 76;
var holdInterval = 0;
var penalty = 10;

timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up";
            }
        }, 1000);
    }
    populateQuestion(questionIndex);
});

//Getting input from user to save thier scores

var createLabel = document.createElement("label");
createLabel.setAttribute("class", "createLabel");
createLabel.textContent = "Enter your initials: ";
questionsDiv.appendChild(createLabel);


var createInput = document.createElement("input");
createInput.setAttribute("type", "text");
createInput.setAttribute("id", "initials");
createInput.textContent = "";
questionsDiv.appendChild(createInput);


var createSubmit = document.createElement("button");
createSubmit.setAttribute("type", "submit");
createSubmit.setAttribute("class", "Submit");
createSubmit.textContent = "Submit";
questionsDiv.appendChild(createSubmit);



//Using local storage to save stuff 
createSubmit.addEventListener("click", function () {
    var initials = createInput.value;
    if (initials === null) {
        console.log("No value entered!");
    } else {
        var finalScore = {
            initials: initials,
            score: timeRemaining
        }
        console.log(finalScore);
        var allScores = localStorage.getItem("allScores");
        if (allScores === null) {
            allScores = [];
        } else {
            allScores = JSON.parse(allScores);
        }
        allScores.push(finalScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);
        window.location.replace("./Scores.html");
    }
});
