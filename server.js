const express = require("express");
const challengeVariv = express();

challengeVariv.use("/static", express.static(__dirname+'/assets'));
challengeVariv.use("/root", express.static(__dirname+'/'));


challengeVariv.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
	console.log("Server on");
})

challengeVariv.listen(8080);
