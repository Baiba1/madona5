window.onload=function(){
    var mans=document.getElementById("vietas");
    var context=mans.getContext("2d");
    context.beginPath();
    context.arc(250, 250, 100,0,Math.PI*2, true);
    context.moveTo(235, 225);
    context.arc(225, 225, 10, 0, Math.PI*2, true);
    context.moveTo(285, 225);
    context.arc(275, 225, 10, 0, Math.PI*2, true);
    context.moveTo(250, 275);
    context.arc(250, 275, 50, 0, Math.PI, false);
    context.moveTo(250, 275);
    context.lineTo(200, 275);
    context.stroke();
  }