const express = require("express");

// 2. set up application object
const app = express();

// 3. set up request rules.
app.get('/', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('HELLO EXPRESS')
});
// 4.
app.listen(8000, ()=>{
    console.log("server is running, port 8000 is listening...")
})