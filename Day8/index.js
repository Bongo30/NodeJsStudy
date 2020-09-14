
// Day08의 내용을 참고하여 이름, 나이, 성별, 주소를 보여주는 테이블로 만들고 이를 추가 , 삭제 하는 기능을 단 하나의 페이지에서 만드시오.
// 추가 버튼을 누르면 이름, 나이, 성별, 주소 각각 입력 받을 수 있는 text field 를 만들고 저장, 취소 버튼이 있습니다. 저장, 취소 버튼을 누르면 입력 필드는 사라져야합니다.
// 입력 혹은 삭제 버튼을 누른다면 새로고침 없이 테이블에서 살아져야합니다.




const express = require("express");  
const bodyParser = require("body-parser");  
const app = express();  
  
app.use(bodyParser.urlencoded({ extended:  false  }));  
app.use(bodyParser.json());  
  
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');

const index = function(req, res){
    res.render('jade_table');
}

const listData = function(req, res){
    var _name =req.body.name;
    var _age =req.body.age;
    var _gender =req.body.gender;
    var _address =req.body.address;

    var listTemp =[{
        name : _name,
        age : _age,
        gender : _gender,
        address : _address
    }]
    var test = listTemp.name;
    console.log(req.body);
    console.log(listTemp);
    res.json({listData : _name}).end();
}

app.get('/',index);
app.post('/list',listData);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});