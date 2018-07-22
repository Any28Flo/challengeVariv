const express = require("express");
const bodyParser = require("body-parser");

const challengeVariv = express();

challengeVariv.use("/static", express.static(__dirname+'/assets'));
challengeVariv.use("/root", express.static(__dirname+'/'));

// Support encoded bodies
challengeVariv.use(bodyParser.urlencoded({ extended: true }));
// Support json encoded bodies
challengeVariv.use(bodyParser.json());
challengeVariv.use(express.static('public'));



challengeVariv.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
	console.log("Server on");
})




challengeVariv.post('/', function (req,res){
	res.send("POST request to the homepage");
})

const port = process.env.PORT || 8080;

challengeVariv.listen(port, () => {
  console.log('Server running on port '+port+'!');
});
