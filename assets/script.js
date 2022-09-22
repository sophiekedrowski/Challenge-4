const Questions = [{
    id: 0,
    q: "Commonly used data types DO NOT include?",
    a: [{ text: "strings", isCorrect: false },
        { text: "booleans", isCorrect: false },
        { text: "alerts", isCorrect: true },
        { text: "numbers", isCorrect: false }
    ]

},
{
    id: 1,
    q: "The condition in an if/else statement is enclosed with    ?",
    a: [{ text: "quotes", isCorrect: false, isSelected: false },
        { text: "curly brackets", isCorrect: false },
        { text: "parenthesis", isCorrect: true },
        { text: "square brackets", isCorrect: false }
    ]

},
{
    id: 2,
    q: "Arrays in Javascript can be used to store",
    a: [{ text: "numbers and strings", isCorrect: false },
        { text: "other arrays", isCorrect: false },
        { text: "booleans", isCorrect: false },
        { text: "all of the above", isCorrect: true }
    ]

},

{
    id: 3,
    q: "String values must be enclosed within     when being assigned to variables",
    a: [{ text: "parenthesis", isCorrect: false },
        { text: "quotes", isCorrect: false },
        { text: "commas", isCorrect: false },
        { text: "curly brackets", isCorrect: true }
    ]

},

{
    id: 4,
    q: "A very useful tool used during development and debugging for printing content to the debugger is:",
    a: [{ text: "JavaScripts", isCorrect: false },
        { text: "terminal/bash", isCorrect: false },
        { text: "for loops", isCorrect: false },
        { text: "console.log", isCorrect: true }
    ]

}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "darkpurple";
    op2.style.backgroundColor = "purple";
    op3.style.backgroundColor = "purple";
    op4.style.backgroundColor = "purple";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "purple";
    op2.style.backgroundColor = "darkpurple";
    op3.style.backgroundColor = "purple";
    op4.style.backgroundColor = "purple";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "purple";
    op2.style.backgroundColor = "purple";
    op3.style.backgroundColor = "darkpurple";
    op4.style.backgroundColor = "purple";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "purple";
    op2.style.backgroundColor = "purple";
    op3.style.backgroundColor = "purple";
    op4.style.backgroundColor = "darkpurple";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 4) {
    id++;
    iterate(id);
    console.log(id);
}

})