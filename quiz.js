var form_data = document.querySelector("#quiz-form");
var button  = document.querySelector("#submit_btn");
var output = document.querySelector("#output");

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
    output.innerText = "Your score is " + score;
}
button.addEventListener("click",score);
