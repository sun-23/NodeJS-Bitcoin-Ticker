const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

app = express();
app.use(bodyParser.urlencoded({extended:true}));

// GET method route
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

// POST method route
app.post("/",function(req,res){
  console.log(req.body.Crypto);
  console.log(req.body.Money);

 // get value form index.html
  var crypto = req.body.Crypto;
  var money = req.body.Money;

// set urlAPi
  var urlAPi = "https://apiv2.bitcoinaverage.com/indices/global/ticker/" + crypto + money ;
  console.log(urlAPi);
  // request API error,response,body
 request(urlAPi, function(error,response,body){
 // ParseJSON
   var data = JSON.parse(body);
   var price = data.last;
   var date = data.display_timestamp;

   console.log(price);
   // show result
   res.write("<p>The current date is " + date + "</p>");
   res.write("<h1>The price of " + crypto + " is " + price + " " + money + "</h1>");
   // end
   res.send();

 });

});

// start server
app.listen(3000,function(){
  console.log("Server running ");
});
