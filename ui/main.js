console.log('Loaded!');

var button= document.getElementById('counter');

button.Onclick= function (){
    counter = counter + 1;
    var span = document.getElementById('count');
    span.InnerHtml = counter.toString();
};