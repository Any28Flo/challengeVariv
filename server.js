var express = require("express");
var starWarsApp = express();

starWarsApp.use("/static", express.static(__dirname+'/assets'));

starWarsApp.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
	console.log("Servidor en funcionamiento");
})

starWarsApp.listen(8080);
