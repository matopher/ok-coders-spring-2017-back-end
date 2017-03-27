var http = require('http');

const PORT=8080;

function handleRequest(req,resp){
	resp.end('<h1>Welcome to my webpage</h1>');
}

var server = http.createServer(handleRequest);

//start our server
server.listen(PORT, function(){
	// This is a callback, get used to it now
	console.log("Server is running on port: %s", PORT);
});