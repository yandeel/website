


var button = document.getElementById("sup");
var body = document.body;

button.addEventListener("click" , function(){
    console.log("click!");
    body.setAttribute("style", "background-color: red");
});