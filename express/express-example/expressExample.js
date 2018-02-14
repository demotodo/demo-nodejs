var express = require('express'),
    connect = require('connect'),
    app = express(),
    PORT = 3000;

app.use(connect.bodyParser());

app.get("/", function (request, response) {
    response.end("<h1>Hello, world!</h1>")
});

app.get("/email", function (request, response) {
    response.send("<form method=post action='/email'>\
    <label for='email'>Email address</label>\
    <input type='email' id='email' name='email' value=''>\
    <input type='submit'>\
    </form>");
});

app.post("/email", function (request, response) {
    var email = request.body.email || '';
    response.end("<h1>Posted email: " + email + "</h1>")
});

app.listen(PORT);

console.log("Now try browsing: http://localhost:" + PORT);
