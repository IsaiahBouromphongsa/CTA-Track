require('dotenv').config;
var express = require('express');
var app = express();
var PORT = 3000;

app.listen(PORT, function(err){
	if (err) console.log("Error in server setup")
	console.log("Server listening on Port", PORT);
})
app.use(express.static('public'));

const api_key = process.env.API_KEY;
const api = `https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${api_key}&mapid=&outputType=JSON`
console.log(api)
console.log("HELLO")







