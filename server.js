const express = require("express");
const bodyParser = require("body-parser");
var Openpay = require('openpay');

const challengeVariv = express();
var openpay = new Openpay(' m9mjv097cj4m57ibfzug', ' sk_e5c54b6f2baf44ddbdc58212f542619d ', [ false ]);


challengeVariv.use("/static", express.static(__dirname+'/assets'));
challengeVariv.use("/root", express.static(__dirname+'/'));
challengeVariv.use("/urlApi", express.static(__dirname+'openpay'))
// Support encoded bodies
challengeVariv.use(bodyParser.urlencoded({ extended: true }));
// Support json encoded bodies
challengeVariv.use(bodyParser.json());
challengeVariv.use(express.static('public'));



challengeVariv.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
	console.log("Server on");
})




challengeVariv.post('openpay', function (req,res){
	const urlApi = openpay;
	res.send("POST request to the homepage")
})

challengeVariv.get(openpay, function(req, res) {
    res.send(req.params.version);
  });
const port = process.env.PORT || 8080;

challengeVariv.listen(port, () => {
  console.log('Server running on port '+port+'!');
	console.log(openpay.customers.create)
});
