const http = require('http');
const paserurl = require('url');
var  fs = require('fs');
var querystring =require('querystring');

const functionDefinition = function (req,res){
    const { headers, method, url} = req;
    const pathname = paserurl.parse(url, true).pathname;

const Users = [{id : 'AA', pw : 'AAA'}, {id : 'BB', pw : 'BBB'}];   

if(pathname == '/'){
        var loginForm = '/LoginForm.html';
        res.end(fs.readFileSync(__dirname + loginForm)); 
        
    }

    if(method =='POST'){
        
            var fid = '';
            var fpw = '';
            var logStatus='Fail ';

        req.on('data',function(data){
            var cli_data= '';
            cli_data +=data;
            console.log('Data event');
            
            var data = querystring.parse(cli_data.toString());
            
            fid = data.fid;
            fpw = data.fpw;  
                        
            Users.forEach(Element => {
                if(fid == Element.id && fpw == Element.pw){
                    logStatus ='Sucsess ';
                   //break;
                }
            });
            var loginStatus = '/LoginStatus.html';
            var htmlString= fs.readFileSync(__dirname + loginStatus).toString();
            
            var resultPost = htmlString.replace("${id}",fid).toString();
            resultPost = resultPost.replace("${pw}",fpw).toString();
            resultPost = resultPost.replace("${loginStatus}",logStatus).toString();       
            
            res.end(resultPost); 
            
                
        });        
        // req.on('end',function(){
        // console('END');
        
        // });
    
    }
    
    
}

http.createServer(functionDefinition).listen(5000);
console.log('Server starts. Port : 5000')