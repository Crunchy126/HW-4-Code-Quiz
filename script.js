var startBtn = document.querySelector(".startBtn");
var startMenu = document.querySelector(".jumbotron");




function start(){
    startMenu.setAttribute("style", "display: none;");
    askQuestions();
}

function askQuestions(){

}




startBtn.addEventListener("click", start);