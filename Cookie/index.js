const express = require("express");  
const bodyParser = require("body-parser");  
const fs = require("fs");
const cookieParser = require('cookie-parser');
const app = express();  

app.use(bodyParser.urlencoded({ extended:  false  }));  
app.use(bodyParser.json()); 
app.use(cookieParser()); 


var userInfo = {

}



app.get('/',function (req,res) {  
    
    // index 페이지 로드
    var name = 'guest';    
    var youtubeAddr = 'https://www.youtube.com/embed/v64KOxKVLVg';
    
    console.log(req.cookies.uname);      
    console.log(req.cookies.upassword); 

    if(req.cookies.uname){

        //쿠키의 id와 비밀번호가 일치 여부 확인
        if(req.cookies.uname == 'aaaa' && req.cookies.upassword =='1111')
        {
            name = req.cookies.uname            
            if(userInfo[name]){
                youtubeAddr = 'https://www.youtube.com/embed/'+userInfo[name];           
                
            }        
        }
        else{

        } 
    }
    console.log(youtubeAddr);
    fs.readFile(__dirname + '/view/index.html', 'UTF-8',
        (err, data) => {
            var conv_data = data.replace(/#name#/g, name).replace(/#youtubeAddr#/g, youtubeAddr);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(conv_data);
            res.end();
        }
    )
});  

app.get('/userinfo',function (req,res) {  

    if(req.query.youtube_addr ==''){
        req.query.youtube_addr = 'https://www.youtube.com/embed/v64KOxKVLVg';
    }
    
    console.log(req.query.youtube_addr)
    const urlsplited = req.query.youtube_addr.split('/');
    userInfo[req.query.uname] = urlsplited[urlsplited.length-1];
    
    console.log(userInfo);
    //if(req.query.uname =='guest' && req.query.upassword =='1111'){
        res.cookie('uname', req.query.uname,{
            maxAge:1000000
        });
    
        res.cookie('upassword', req.query.upassword,{
            maxAge:1000000
        });
   // }

    res.redirect('/');  
});
//removecookie
app.get('/removecookie',function (req,res) {  
    console.log('removecookie')
    res.clearCookie('uname');
    res.clearCookie('upassword');
    res.redirect('/');  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});