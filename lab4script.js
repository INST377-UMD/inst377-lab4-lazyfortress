// Alert button
document.getElementById("alertButton").addEventListener("click", function() {
    let name = document.getElementById("nameInput").value;
    if (name.trim() === "") {
        alert("Please enter your name.");
    } else {
        alert("Hi " + name + "!");
    }
});

// Change background color
let count = 1;
document.getElementById("colorButton").addEventListener("click", function() {
    count++;
    if (count%2 != 0){
        document.body.style.backgroundColor = "lightseagreen";
    } else{
        document.body.style.backgroundColor = "lightblue";
    }
});

// Text validator
document.getElementById("validateButton").addEventListener("click", function() {
    let text = document.getElementById("textInput").value;
    let validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (validation.test(text)) {
        alert("Special characters are not allowed");
    } else {
        alert("Input is valid");
    }
});

// Text heading
document.getElementById("addTextButton").addEventListener("click", function() {
    let heading = document.querySelector("h1");
    if (!heading.textContent.includes(" Add Text")) {
        heading.textContent += " Add Text";
    }
});
