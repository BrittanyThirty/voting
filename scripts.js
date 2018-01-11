$(document).ready(function(){
  var age = parseInt(prompt("Enter your age to see if you can legally vote!"));

  if(age>18){
    $('#over18').show();
  }else if(age===18){
    alert("Phew, you just made it!")
    $('#over18').show();
  }else{
    $('#under18').show();
  }
});
