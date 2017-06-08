console.log('Loaded!');

var button= document.getElementById('counter');
var span = document.getElementById('span');

button.Onclick= function (){
    counter = counter + 1;
    span.InnerHtml = counter.toString();
};