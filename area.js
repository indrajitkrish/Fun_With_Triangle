var lengths = document.querySelectorAll(".length");
var button = document.querySelector("#check_btn");
var output = document.querySelector("#output");
output.style.display="none";

function calculate_hypotenuse(){
    var a = Number(lengths[0].value);
    var b = Number(lengths[1].value);
    var sum = a * b;
    var area = (sum/2).toFixed(2) ;
    output.style.display="block";
    output.innerText = "Area of the triangle " + area;
}
button.addEventListener("click",calculate_hypotenuse);