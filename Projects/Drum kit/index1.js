var numberOfButtons = document.querySelectorAll("button").length;

for (var i = 0; i < numberOfButtons; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function() {
    alert("I got clicked"); 
});
    
}
