const express = require("express");  
const bodyParser = require("body-parser");  
const fs = require("fs");
const cookieParser = require('cookie-parser');
const app = express(); 
const NodeRsa = require('node-rsa');

app.use(bodyParser.urlencoded({ extended:  false  }));  
app.use(bodyParser.json()); 
app.use(cookieParser()); 


//공개키 방식 암호화  공인인증서 
// const key = new NodeRsa({b:1024});
//  let secret = "aaaa";
 
// console.log(secret);

//  var encryptedString = key.encrypt(secret,'base64'); // 공개키
//  console.log("<public key >");
//  console.log(encryptedString);

//  var public_key = key.exportKey('public');
 
//  console.log("<export public key >");
//  console.log(public_key);

 const public_key ='-----BEGIN PUBLIC KEY-----\n'+
 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC0I/cos2qQCMdbbKBdDio5TRL6\n'+
 'b+ud3zkXNaPhwTXqv2FkpmMzMFeKIvSuoEJTNfdzaD9HoMP/De+41uGEhDSfLPHj\n'+
 'zj6ZxDTXTF/kdQ0TVeTul2jtXrN0TpJDmt4qvrnJZSKmez2CcPnQ2tCuzTC2r9vR\n'+
 'q12MK7SnqLetc4QRZwIDAQAB\n'+
 '-----END PUBLIC KEY-----';

//  var decrpytedString = key.decrypt(encryptedString,'utf8'); //비밀키
//  console.log("<private key >");
//  console.log(decrpytedString);
//  var private_key = key.exportKey('private');
//  console.log("<exported private key >");
//  console.log(private_key);
const private_key=
'-----BEGIN RSA PRIVATE KEY-----\n'+
'MIICXQIBAAKBgQC0I/cos2qQCMdbbKBdDio5TRL6b+ud3zkXNaPhwTXqv2FkpmMz\n'+
'MFeKIvSuoEJTNfdzaD9HoMP/De+41uGEhDSfLPHjzj6ZxDTXTF/kdQ0TVeTul2jt\n'+
'XrN0TpJDmt4qvrnJZSKmez2CcPnQ2tCuzTC2r9vRq12MK7SnqLetc4QRZwIDAQAB\n'+
'AoGAZLkHZXaMSuTdszzVnbJh4ZA64FTcBXXe0h9n9r61iwBfUIvIQ8Lv74kEDvAE\n'+
'pcozBhBv8XjunhoIw+1CQ3o4gSVWKR2zFpPpC3tzWzIBmbRFBr29dNyhEN4SADZS\n'+
'W19kUM59QHswZIbzw+0dMMG0dCUr86Vv6ifXqVqPceX+cUECQQD4Dp8tFrttqq6V\n'+
'K/JYhOFn2AyZxPOd8q+icnZ8ZZzE+xE1j2vzVfeGaHT8RIwcqu60W1gjJDa8JfdF\n'+
'QvA3MPJ/AkEAueidxgqGWQBeZMZNAWuU88mu3GKYWgPvva5qDaiGBu/fX1iNYiUw\n'+
't0JziD8w68jVzbpewGVD8bXb4fSVEbwdGQJBAMNuOag7XaVUMMGj4wYsgq3ewGax\n'+
'jcHl/sv8ZC8zmyRyLafF/CW1mBMT3v8VPlIjtXbw9GqTUHBBdSPjTgAdlx8CQEXp\n'+
'EPO5X342okiZPboL/86RiF0+AnbPRid5YE5UkloneEN9pGVFAQXZSmLxCG+SbbxY\n'+
'mmsVabCKp+5XsHsj13kCQQDSy8+Bfcgpe87S9uRKW1GM9+EdRTv8ckscyAu6rGyU\n'+
'2jeye6t+/p6bmwLfKOnnjlYyKsxoyIXQetuSyyDdzkfF\n'+
'-----END RSA PRIVATE KEY-----';

let Key_Private = new NodeRsa(private_key); // 공개키
let Key_Public = new NodeRsa(public_key);   // 비밀키 


//let upasswordEncrpyed = Key_Public.encrypt(req.query.upassword,'base64'); // 공개키




//let upasswordDecrypt = Key_Private.decrypt(req.cookies.password,'utf8'); 


//const private_key ='-----BEGIN PRIVATE KEY-----';

// let key_public = new NodeRsa("cccasdfdfadsfasdfadsfadsfasdfasdfadsfsdfdsfc");
// console.log(key_public);

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
//console.log(users)
// const initUser= new Users(name='guest',password='1111',youtubeAddr='https://www.youtube.com/embed/v64KOxKVLVg');
// userInfo.push(initUser);

//console.log(userInfo);

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

            //let unameDecrypt = Key_Private.decrypt(req.cookies.uname,'utf8'); 
            //console.log(unameDecrypt)
            let upasswordDecrypt = Key_Private.decrypt(req.cookies.upassword.toString(),'utf8'); 

            console.log(upasswordDecrypt);
            if(req.cookies.uname == user.name && upasswordDecrypt== user.password){
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
        
        //let unameEncrpyed = Key_Public.encrypt(req.query.uname,'base64'); // 공개키
        let upasswordEncrpyed = Key_Public.encrypt(req.query.upassword,'base64'); // 공개키
        //if(req.query.uname =='guest' && req.query.upassword =='1111'){
            res.cookie('uname', req.query.uname,{
                maxAge:1000000
            });
        
            res.cookie('upassword', upasswordEncrpyed,{
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