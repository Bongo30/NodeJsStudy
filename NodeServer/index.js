const express = require('express')
const app = express()
const bodyParser = require("body-parser");  
const port = 5000

const {User} = require('./userInfo')
app.use(bodyParser.urlencoded({ extended:  true  }));  
app.use(bodyParser.json()); 


app.get('/',(req,res)=>res.send('hello world'))

app.get('/api',(req,res)=>{    
    
    res.send("Son Byeong Gil")
})

app.post('/register',(req,res)=>{
    //const user = new User(req.body);
    
    console.log(req);
    var name = req.query.name;
    console.log(name);
    //saveUser(user,req.body);
    
   // console.log(user);

    return res.status(200).json({
        success : true,
        name : name
    })
})



function saveUser(User,Request){
    User.name = Request.body.name;
    User.password = Request.body.password;
    User.youtubeAddr = Request.body.youtubeAddr;

    return User;
}

app.listen(port,()=>console.log('test server listening on port : ' ,port))