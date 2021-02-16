window.onload=function(){
    var mans=document.getElementById("vietas");
    var context=mans.getContext("2d");
    context.fillRect(20,20,100,100);
    context.clearRect(40,40,60,60);
    context.strokeRect(45,45,50,50);
  }