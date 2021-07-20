const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

// set up a new folder called public and use the below code, otherwise the custom styles cannot be displayed
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    const firstName = req.body.first;
    const lastName = req.body.last;
    const email = req.body.email;
    
    const data = {
        members: [
            {
              email_address: email,
              status:"subscribed",
              merge_fields: {
                  FNAME: firstName,
                  LNAME: lastName
              }

            }
        ]
    };
    const jsonData = JSON.stringify(data);

    const url = "https://us1.api.mailchimp.com/3.0/lists/a272b53548"

    const options = {
        method: "POST",
        auth: "sophie:72e02d3532209aa57f9bfceddce585ba-us1"
    }

    const request = https.request(url, options, function(response){
        if (response.statusCode === 200){
            res.sendFile(__dirname + "/success.html");
        }
        else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data){
            console.log(JSON.parse(data));
        });
    });
    request.write(jsonData);
    request.end();
});

// 在登陆失败的页面上点击button返回主页面
app.post("/failure", function(req, res){
    res.redirect("/")
});

app.listen(process.env.PORT || 3002, function(){
    console.log("Server is running on port 3002");
});

// API KEY
// 72e02d3532209aa57f9bfceddce585ba-us1

// List ID
// a272b53548