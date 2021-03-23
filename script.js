function validateForm() {
  var p = document.forms["myForm"]["principal"].value;
  if (p == 0 || p<0) {
    alert("Enter a positive number");
    document.getElementById("principal").value="";
    document.getElementById("principal").focus();
    document.getElementById("result").innerHTML="";
    return false;
  }
else
{
    var principal;
    var rate;
    var years;
    var interest;
    var d=new Date();
    var curryear;
    //var result;
    principal=document.getElementById("principal").value;
    rate=document.getElementById("rate").value;
    years=parseInt(document.getElementById("years").value);
    interest=principal*years*rate/100;
    curryear=d.getFullYear()+years;
    document.getElementById("result").innerHTML ="If you deposit <span style='background-color: #FFFF00'>" + principal +"</span>,<br> at an interest rate of <span style='background-color: #FFFF00'>"+ rate +"%.</span> <br>You will receive an amount of <span style='background-color: #FFFF00'>"+ interest +"</span>,<br>in the year <span style='background-color: #FFFF00'>"+curryear+"</span>.<br>";
    return false;
}
  
}


function sliderChange(val) {
document.getElementById("sliderVal").innerHTML = val+"%";
}
        