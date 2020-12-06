const express = require("express");

const app = express();

app.get("/", function (request, response) {
    response.send("<h1>Hello Bhosdike</h1>");
});

app.listen(3000, function () {
    console.log("server started at port 3000.")
});