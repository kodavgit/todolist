let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let input2 = document.querySelector(".userinp");
let ul = document.querySelector("ul");
let css = document.querySelector("h3");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let body = document.getElementById("gradient");


function inputLenght() {
    return input2.value.length;
}

function createListElement() {
    let li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li); 
        input.value = "";
}


button.addEventListener("click", function() {
    if (inputLenght() > 0) {
        createListElement();
    }
})

input2.addEventListener("keypress", (e) => {
    if (inputLenght() > 0 && e.which === 13) {
        createListElement();
    }
})


function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);





