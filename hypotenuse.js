var lengths = document.querySelectorAll(".length");
var button = document.querySelector("#check_btn");
var output = document.querySelector("#output");
output.style.display="none";

function calculate_hypotenuse(){
    var a = Number(lengths[0].value);
    var b = Number(lengths[1].value);
    var sum = (a*a)+(b*b);
    var hyp = Math.sqrt(sum);
    output.style.display="block";
    output.innerText = "The length of Hypotenuse " + hyp;
}
button.addEventListener("click",calculate_hypotenuse);