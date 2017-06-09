console.log('Loaded');

//Counter code
var button = document.getElementById('counter');

button.onclick = function(){
    
    //Create a request object
    
    var request = new XMLHttpRequest();
    
    //Capture the response and keep it in a variable
    
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
          //Do some action
          if (request.status === 200); {
              
            // Render the variable in the correct span
              
              var counter = request.responseText;
              var span= document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      } 
    };
    
//Create the request code
request.open('http://aadarshtn.imad.hasura-app.io/counter', true);
request.send(null);

};
    