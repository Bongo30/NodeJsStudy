const  express = require("express");
const  bodyParser = require("body-parser");
const  app = express();
const fs =require('fs');

const Users = [{id : 'AA', pw : 'AAA'}, {id : 'BB', pw : 'BBB'}];   

app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());

//get
app.get('/',function(req,res){
 //   res.send('Hello World');
    var loginForm = '/LoginForm.html';
    res.end(fs.readFileSync(__dirname + loginForm)); 
});

//Post
app.post('/LoginStatus.html',function (req,res) {
console.log(req.body);

var fid = req.body.fid;
var fpw = req.body.fpw;
var logStatus='Fail ';

var loginStatus = '/LoginStatus.html';
var htmlString= fs.readFileSync(__dirname + loginStatus).toString();

Users.forEach(Element => {
    if(fid == Element.id && fpw == Element.pw){
        logStatus ='Sucsess ';
        
    }
});

var resultPost = htmlString.replace("${id}",fid).toString();
resultPost = resultPost.replace("${pw}",fpw).toString();
resultPost = resultPost.replace("${loginStatus}",logStatus).toString();       

res.end(resultPost); 
});

app.listen(3000, function () {
console.log('Example app listening on port 3000!');

});