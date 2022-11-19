var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var css = document.querySelector("h3");
var color1 = document.getElementById("color1")
var color2 = document.getElementById("color2")
var body = document.getElementById("gradient")


button.addEventListener("click", function() {
    if (input.value.length > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li); 
        input.value = "";
    }
})

input.addEventListener("keypress", function(event) {
    if (input.value.length > 0 && event.which === 13) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li); 
        input.value = "";
    }
})

color1.addEventListener("input", function() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
})

color2.addEventListener("input", function() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
})



