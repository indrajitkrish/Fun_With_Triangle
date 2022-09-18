var angles = document.querySelectorAll(".angle");
var button = document.querySelector("#check_btn");
var output = document.querySelector("#output");
output.style.display="none";

function sumoff(angle1,angle2,angle3){
    console.log(angle1);
    console.log(angle2);
    console.log(angle3);
    if(angle1>0 && angle2>0 && angle3>0)
    {
   var sum=angle1+angle2+angle3;
   console.log(sum);
   return sum;
    }
    else{
        return 0;
    }
}
function calculate_Is_a_triangle(){
    var sum = sumoff(Number(angles[0].value),Number(angles[1].value),Number
    (angles[2].value));
     console.log(sum);
    output.style.display = "block";
    if(sum === 180)
    output.innerText = "yay , this angles form a triangle";
    else if(sum == 0)
    output.innerText = "Enter all the three angles";
    else
    output.innerText = "nah, this angles doesn't form a triangle";
}
button.addEventListener("click",calculate_Is_a_triangle);