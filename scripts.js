$(document).ready(function(){
  var age = parseInt(prompt("Enter your age!"));

  if(age>21){
    $('#over21').show();
  }else if(age===21){
    alert("Phew, you just made it!")
    $('#over21').show();
  }else{
    $('#under21').show();
  }
});
