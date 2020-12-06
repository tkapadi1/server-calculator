const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function (request, response) {

    var b = request.body.bmi;
    if(b!=null){
        response.sendFile(__dirname+"bmicalculator");
    }
  // creating variables for storing the numbers we get from user.
  var num1 = request.body.num1;
  var num2 = request.body.num2;
  var oprtr = request.body.oprtr;
  switch (oprtr) {
    case "+":
      if (oprtr == "+") {
          var calculate = parseFloat(num1) + parseFloat(num2);
          response.send(
            "<h1>The addition is " +
              calculate +
              "</h1>" +
              "<br>Thankyou for choosing this site."
          );
      }
      break;
    case "-":
      if (oprtr == "-") {
        var calculate = parseFloat(num1) - parseFloat(num2);
        response.send(
          "<h1>The subtraction is " +
            calculate +
            "</h1>" +
            "<br>Thankyou for choosing this site."
        );
      }
      break;
    case "*":
      if (oprtr == "*") {
        var calculate = parseFloat(num1) * parseFloat(num2);
        response.send(
          "<h1>The multiplication is " +
            calculate +
            "</h1>" +
            "<br>Thankyou for choosing this site."
        );
      }
      break;
    case "/":
      if (oprtr == "/") {
        var calculate = parseFloat(num1) / parseFloat(num2);
        response.send(
          "<h1>The division is " +
            calculate +
            "</h1>" +
            "<br>Thankyou for choosing this site."
        );
      }
      break;
    default:
        response.send("Wrong Operator written.");
      break;
  }
});

app.get("/bmicalculator.html", function (request, respond) {
  respond.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator.html", function (request, response) {
  // variable for calculating BMI
  var w = request.body.w;
  var h = request.body.h;
  var bmi = parseFloat(w) / [parseFloat(h) * parseFloat(h)];
  response.send("Your bmi is " + bmi);
});

app.listen(3000, function () {
  console.log("server started at port 3000.");
});
