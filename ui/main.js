//counter code
var btn = document.getElementById('counter');

btn.onclick = function (){
  
  //create a request object
  var request = new XMLHttpRequest();
  
  //we will write what to do with the response before makking a request
  //capture the response and store it in a variable
  request.onreadystatechange = function (){
      
      //checks the current status of request tha it tis successfully completed ( XMLHttpRequest.DONE )
      if (requst.readystate === XMLHttpRequest.DONE ){
          
          //Take some action
          //checks that the request is successful or not
          if (request.status === 200 ){
              var counter = request.responseText ;
              counter = counter + 1;
              span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
          
      }
      //Not done yet
  };
  
  //make a request to the counter end point
  request.open('GET' , 'http://utvhanuma03.imad.hasura-app.io/counter' , true);
  request.send(null);
  
};