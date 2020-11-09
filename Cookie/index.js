const express = require("express");  
const bodyParser = require("body-parser");  
const fs = require("fs");
const cookieParser = require('cookie-parser');
const app = express();  

app.use(bodyParser.urlencoded({ extended:  false  }));  
app.use(bodyParser.json()); 
app.use(cookieParser()); 


//JSON------------
//JSON 파일 로드
function LoadJson(filename=''){
    if(fs.existsSync(filename)){
        return JSON.parse(fs.readFileSync(filename).toString())
    }
    return '""';

}

var jsonData = LoadJson('userInfo.json');

class Users{
    constructor(name, password, youtubeAddr){
        this.name = name;
        this.password = password;
        this.youtubeAddr = youtubeAddr;
    }
}
//----------------
//JSON 객체 배열 생성 
var users = jsonData.user;
const userInfo = users;
// const initUser= new Users(name='guest',password='1111',youtubeAddr='https://www.youtube.com/embed/v64KOxKVLVg');
// userInfo.push(initUser);

console.log(userInfo);

app.get('/',function (req,res) {  
    
    // index 페이지 로드
    var name = userInfo[0].name;
    var youtubeAddr ='';
    var idx =0;
    console.log(req.cookies.uname);      
    console.log(req.cookies.upassword); 

    if(req.cookies.uname){
        var checkUser = false;
        userInfo.forEach(user => {
            if(req.cookies.uname == user.name && req.cookies.upassword == user.password){
                checkUser =true;
                idx = userInfo.indexOf(user);
            }
        });

        if(!checkUser){
            name = userInfo[0].name;     
            //outubeAddr = initUser.youtubeAddr;
        }
        else{ 
            //해당 쿠키의 인덱스를 찾아 해당 유투브 주소 오픈         
            name = req.cookies.uname;  
            youtubeAddr = userInfo[idx].youtubeAddr;
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

    // 기존에 존재 하는 유저인지 확인
    // var checkUser = false;
    // userInfo.forEach(user => {
    //     if(req.query.uname == user.name){
    //         checkUser =true;
            
    //     }
    // });   
    
        if(req.query.youtube_addr ==''){
            req.query.youtube_addr = userInfo[0].youtubeAddr;
        }
        userInfo.push(new Users(req.query.uname,req.query.upassword,req.query.youtube_addr));

        console.log(req.query.youtube_addr)
        const urlsplited = req.query.youtube_addr.split('/');
        userInfo[req.query.uname] = urlsplited[urlsplited.length-1];
        
        
        //if(req.query.uname =='guest' && req.query.upassword =='1111'){
            res.cookie('uname', req.query.uname,{
                maxAge:1000000
            });
        
            res.cookie('upassword', req.query.upassword,{
                maxAge:1000000
            });
    


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