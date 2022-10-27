document.getElementById("b1").addEventListener('click', onClick);

function onClick () {
   var normal_hour = Number(document.getElementById("in1").value);
   var normal_rate = Number(document.getElementById("in2").value); 
   var overtime_rate = Number(document.getElementById("in3").value);
   var hours_work = Number(document.getElementById("in4").value);

   var earned_money;
   if (hours_work <= normal_hour){
    earned_money = hours_work * normal_rate
   } else {
        earned_money =(hours_work - normal_hour)*overtime_rate;
   }    earned_money += normal_hour * normal_rate;
    document.getElementById("output").innerHTML = earned_money + " dollars.";
}