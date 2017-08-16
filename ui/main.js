//counter code
var button = document.getElementById('counter');

button.onclick = function (){
  
    //create a request object
    var request = new XMLHttpRequest();
      
    //we will write what to do with the response before makking a request
    //capture the response and store it in a variable
    request.onreadystatechange = function (){
          
        //checks the current status of request tha it tis successfully completed ( XMLHttpRequest.DONE )
        if (request.readyState === XMLHttpRequest.DONE ){
              
            //Take some action
            //checks that the request is successful or not
            if (request.status === 200 ){
                var counter = request.responseText ;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
              
        }
        //Not done yet
    };
      
    //make a request to the counter end point
    request.open('GET' , 'http://utvhanuma03.imad.hasura-app.io/counter' , true);
    request.send(null);
};

//Submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //make a request to the server and send the name
    //create a request object
    var request = new XMLHttpRequest();
      
    //we will write what to do with the response before makking a request
    //capture the response and store it in a variable
    request.onreadystatechange = function (){
          
        //checks the current status of request tha it tis successfully completed ( XMLHttpRequest.DONE )
        if (request.readyState === XMLHttpRequest.DONE ){
              
            //Take some action
            //checks that the request is successful or not
            if (request.status === 200 ){
                //capture a list of names and render it as a list
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(i=0;i<names.length;i++){
                    list += '<li>' + names[i] + '</li>' ;
                }
                var ul = document.getElementById('list');
                ul.innerHTML = list;
            }
              
        }
    };
       
    //make a request to the counter end point
    request.open('GET' , 'http://utvhanuma03.imad.hasura-app.io/submit-name?name=' + name , true);
    request.send(null);
};