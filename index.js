var  http = require('http');
//create a server object:

http.createServer(function (req, res) {
    console.log('왜 두번씩 consol에 찍힐까요 ? 같이 고민');
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080