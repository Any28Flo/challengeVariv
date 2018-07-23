const express = require("express");
const bodyParser = require("body-parser");
const Openpay = require('openpay');

const challengeVariv = express();

var openpay = new Openpay('m9mjv097cj4m57ibfzug', 'sk_e5c54b6f2baf44ddbdc58212f542619d',[ true ]);

url="https://sandbox-api.openpay.mx/v1/moiep6umtcnanql3jrxp"

challengeVariv.use("/static", express.static(__dirname+'/assets'));
challengeVariv.use("/root", express.static(__dirname+'/'));
challengeVariv.use("/urlApi", express.static(__dirname+'open'))
challengeVariv.use(express.static('public'));


// Support encoded bodies
challengeVariv.use(bodyParser.urlencoded({ extended: true }));
challengeVariv.use(bodyParser.json());

challengeVariv.use(express.json());
challengeVariv.use(express.urlencoded())

challengeVariv.post('/', function(req, res){
	res.send('Got a POST request');

});



challengeVariv.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
	console.log("Server on");
})



const port = process.env.PORT || 8080;

challengeVariv.listen(port, () => {
  console.log('Server running on port '+port+'!');
});
