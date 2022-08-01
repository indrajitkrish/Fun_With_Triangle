var form_data = document.querySelector("#quiz-form");
var button  = document.querySelector("#check_btn");
var output = document.querySelector("#output");
output.style.display="none";

var answers=["90°","right angled"];

function score(){
    let i=0;
    let score=0;
    const forms = new FormData(form_data);
    for(let value of forms.values()){
        if(value === answers[i]){
            score++;
        }
        i++;
    }
    output.style.display="block";
    output.innerText = "Your score is " + score;
}
button.addEventListener("click",score);
