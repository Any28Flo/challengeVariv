const express = require("express");
const challengeVariv = express();

challengeVariv.use("/static", express.static(__dirname+'/assets'));

challengeVariv.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
	console.log("Server on");
})

starWarsApp.listen(8080);
