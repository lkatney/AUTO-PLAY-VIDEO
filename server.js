var express = require("express"),
    app = express(),
    bodyParser = require('body-parser')
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    port = parseInt(process.env.PORT, 10) || 5000;


app.use(express.query());        //parse the query string from the request
app.use(bodyParser());   		//parse the body of the request
app.use(methodOverride());
app.use(express.static(__dirname + '/'));

/*
var oneDay = 86400000;
app.use(express.static(__dirname + '/',{ maxAge: oneDay })); //public directory
app.use(express.cookieParser()); //parse cookies from the request
app.use(express.logger());       //log the request to std out
app.use(express.compress());
*/

app.get('/',function(req,res){
	res.render('index.html');
});

app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

app.listen(port, function() {
	console.log("Server Started...");
	console.log("Listening on " + port);
});
