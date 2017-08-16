//counter code
var btn = document.getElementById('counter');
var counter = 0;
btn.onclick = function (){
  
  //make an request to counter end point
  
  //capture the response and store it in a variable
  
  //render the variable in the correct span
  counter = counter + 1;
  span = document.getElementById('count');
  span.innerHTML = counter;
};