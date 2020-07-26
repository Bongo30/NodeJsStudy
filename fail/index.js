var  http = require('http');
const parseUrl = require('url');
var  fs = require('fs');

var querystring =require('querystring');
//create a server object:
http.createServer(function (req, res) {

const{headers, method, url,data} =req;
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
        req.on('end',function(){
            console.log('End event');
        
        });
    }    
    else {
    console.log('method : ', method);
    }

  }
  else{
console.log(pathname);
    if(method=='GET'){
        const queryObject = parseUrl.parse(url, true).query; 
    
        var name = queryObject.fname;
        var pw = queryObject.fpw;  

        var loginPage = '/LoginStatus.html';
        var htmlString= fs.readFileSync(__dirname + loginPage).toString();
        
        var result = htmlString.replace("${name}",name).toString();
        result = result.replace("${pw}",pw).toString();
        res.write(result);
        //res.end();
        
    }
    else if(method =='POST'){
        console.log(url);
        req.on('data',function(chunk){
            console.log(chunk.toString());
            var data = querystring.parse(chunk.toString());
        })        
        req.on('end',function(){
            console.log('End event');
        
        });
        
        var fid = data.fid;
        var fpw = data.fpw;  

        var loginStatus = '/LoginStatus.html';
        var htmlString= fs.readFileSync(__dirname + loginStatus).toString();
        
        var resultPost = htmlString.replace("${id}",fid).toString();
        resultPost = resultPost.replace("${pw}",fpw).toString();
        res.write(result);
        res.end();
    }
    
    
  
}
}).listen(8080); //the server object listens on port 8080
console.log('server start.... port : 8080');
