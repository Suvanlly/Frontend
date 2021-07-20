var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImage = "images/dice" + randomNumber1 + ".png";
var randomImage2 = "images/dice" + randomNumber2 + ".png";


var image1 = document.getElementsByClassName("img1")[0]; //this must include array element subscript.

var image2 = document.getElementsByClassName("img2")[0];

image1.setAttribute("src", randomImage);
image2.setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🥳 Player1 Win!";
}
else {
    document.querySelector("h1").innerHTML = "🥳 Player2 Win!";
}