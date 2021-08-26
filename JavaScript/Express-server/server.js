const express = require("express");

    const app = express();

    app.get("/", function(request, response){
        response.send("<h1>Hello, World!</h1>");
    });

    app.get("/contact", function(req, res){
        res.send("Contact me at: sophiesun.au@gmail.com");
    });

    app.get("/about", function(req, res){
        res.send("Sophie owns this page");
    });

    app.get("/hobby", function(req, res){
        res.send("Sophie loves this page");
    });

    app.listen(3000, function(){
        console.log("Server started on port 3000")
    });
    