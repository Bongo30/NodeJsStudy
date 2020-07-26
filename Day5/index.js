var  http = require('http');
const parseUrl = require('url');
var  fs = require('fs');

var querystring =require('querystring');
//create a server object:
http.createServer(function (req, res) {

const{headers, method, url} = req;
const pathname = parseUrl.parse(url,true).pathname;

if (pathname == '/') 
{
    if(method == 'GET'){
    
        var loginForm = '/LoginForm.html';
        res.end(fs.readFileSync(__dirname + loginForm));   
        
    }
    else if(method =='POST'){
        req.on('data',function(chunk){
            console.log(chunk.toString());
            var data = querystring.parse(chunk.toString());

        })
    }    
    else {
      console.log('method : ', method);
    }

  }
  else if( pathname == '/Login.html'){

    
    const queryObject = parseUrl.parse(url, true).query; 
    
        var name = queryObject.fname;
        var pw = queryObject.fpw;  

        var loginPage = '/Login.html';
        var htmlString= fs.readFileSync(__dirname + loginPage).toString();
      
        
        var result = htmlString.replace("${name}",name).toString();
        result = result.replace("${pw}",pw).toString();
       // var htmlString= fs.readFileSync(__dirname + test).toString();        
        console.log(result);
      
        res.write(result);
        res.end();
        
  }
  else {
    console.log('url : ', url);

  }

}).listen(8080); //the server object listens on port 8080
console.log('server start.... port : 8080');
