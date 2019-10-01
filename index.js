const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

// GET method route
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

// POST method route
app.post("/", function(req, res) {
  console.log(req.body.Crypto);
  console.log(req.body.Money);
  console.log(req.body.amount);
  // get value form index.html
  var crypto = req.body.Crypto;
  var fiat = req.body.Money;
  var amount = req.body.amount;

  // set options
  var options = {
    url: "https://apiv2.bitcoinaverage.com/convert/global",
    method: "GET",
    qs: {
      from: crypto,
      to: fiat,
      amount: amount
    }
  };

  // request API error,response,body
  request(options, function(error, response, body) {
    // ParseJSON
    var data = JSON.parse(body);
    var price = data.price;
    var date = data.time;

    // console.log(price);
    // show result
    res.write("<p>The current date is " + date + "</p>");
    res.write("<h1>The price of " + amount + " " + crypto + " is " + price + " " + fiat + "</h1>");
    // end
    res.send();

  });

});

// start server
app.listen(3000, function() {
  console.log("Server running ");
});
