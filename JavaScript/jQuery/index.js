// add class contains Css styles to an HTML element
$("h1").addClass("big-title");
$("a").addClass("padding-100");

// add mutiple class with a space in between
$("h1").addClass("big-title padding-100");

// set the value of the attribute
$("a").attr("href", "http://www.google.com");

// adding Event Listeners with Jquery
// example 1 
// looking for h1, once h1 got clicked add eventlistener .click and call the callback function once it detects a click. the callback function will change the color of h1 to yellow
$("h1").click(function(){
    $("h1").css("color", "yellow");
})
// example 2
// if you wanna change the color of h1 once you click any button without jQuery
for (var i = 0; i < 5; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h1").style.color = "purple";
    });
}
// if use jQuery to write the above function, no need to use for loop, with jQuert it will search all buttons in the code.
$("button").click(function(){
    $("h1").css("color", "purple");
});

// example 3
// keydown eventListener with jQuery
$("input").keydown(function(event){
    $("h1").text(event.key);
});

// There is a more flexible way to add EventListener with "on"
$("h1").on("mouseover", function(){
    $("h1").css("color", "blue");
});

// You can also add/remove/prepend/append the HTML element with jQuery
// before and after will be added beyond the h1 tag, but append and prepend will be added inside the h1 tag
$("h1").before("<button>before</button>");
$("h1").after("<button>after</button>");
$("h1").prepend("<button>prepend</button>");
$("h1").append("<button>append</button>");