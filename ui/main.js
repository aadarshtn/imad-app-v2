console.log("Loaded");

//Counter code
var button= document.getElementById("counter");

button.onclick = function() {
  
  //Create request Object
  var request = new XMLHttpRequest();
  
  //Capture the response
  request.onreadystatechange = function(){
    if (request.readystate === XMLHttpRequest.DONE) {
        //Take some action
        if (request.status === 200){
          var counter = request.responseText;
          var span = document.getElementById("counter");
          span.innerHTML = counter.toString();
        }
    }
  };
  
    //Make the request
    request.open('GET' , 'http://aadarshtn.imad.hasura-app.io/counter' , true);
    request.send(null);
    
};
