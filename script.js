var startBtn = document.querySelector(".startBtn");
var startMenu = document.querySelector(".jumbotron");
var questionBox = document.querySelector(".question");
var container = document.querySelector(".container");

var bOneSpan = document.querySelector(".bOneSpan");
var bTwoSpan = document.querySelector(".bTwoSpan");
var bThreeSpan = document.querySelector(".bThreeSpan");
var bFourSpan = document.querySelector(".bFourSpan");

var bOne = document.querySelector(".bOne");
var bTwo = document.querySelector(".bTwo");
var bThree = document.querySelector(".bThree");
var bFour = document.querySelector(".bFour");

var questions = {
     question1: {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    question2: {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    question3: {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    question4: {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    question5: {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
        answer: "console log"
    }
};




function start(){
    startMenu.setAttribute("style", "display: none;");
    askQuestions();
    // console.log(questions.question1.title);
    
}

function askQuestions(){
    container.setAttribute("style", "display: block;");

    questionBox.textContent = questions.question1.title;
    bOneSpan.textContent = questions.question1.choices[0];
    bTwoSpan.textContent = questions.question1.choices[1];
    bThreeSpan.textContent = questions.question1.choices[2];
    bFourSpan.textContent = questions.question1.choices[3];

    bOne.addEventListener("click", function(){
        answerIncorrect();
    
    });
    bTwo.addEventListener("click", function(){
        answerIncorrect();
    
    });
    bThree.addEventListener("click", function(){
        answerCorrect();
    
    });
    bFour.addEventListener("click", function(){
        answerIncorrect();
    
    });
}
 
function answerCorrect(){
    console.log("correct");
    
}
function answerIncorrect(){
    console.log("incorrect");
    
}




startBtn.addEventListener("click", start);

