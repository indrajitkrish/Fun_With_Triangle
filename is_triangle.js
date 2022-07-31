var angles = document.querySelectorAll(".angle");
var button = document.querySelector("#check_btn");
var output = document.querySelector("#output");

function sumoff(angle1,angle2,angle3){
   var sum=angle1+angle2+angle3;
   console.log(sum);
   return sum;
}
function calculate_Is_a_triangle(){
    var sum = sumoff(Number(angles[0].value),Number(angles[1].value),Number
    (angles[2].value));
    if(sum<=180)
    output.innerText = "yay , this angles form a triangle";
    else
    output.innerText = "nah, this angles doesn't form a triangle";
}
button.addEventListener("click",calculate_Is_a_triangle);