const express = require("express");  
const bodyParser = require("body-parser");  
const app = express();  
  
app.use(bodyParser.urlencoded({ extended:  false  }));  
app.use(bodyParser.json());  
  

var listCnt =0;
// app.post('/',function (req,res) {  
//     console.log(req.body)
//     res.end(' ' + req.body.id);  
// });  

const listSample = [
    {id : 1 ,title : '누가 내 초코를 옮겼을까?' , description : '치즈를 옮겨야지.', preview : '그리고 그리고 그리고.', pic : 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk'},
    {id : 2 ,title : '난쟁이가 쏘아올린 대포알' , description : '대포알?.' , preview : '그란데 말입니다..' , pic : 'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk'}
]

app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './Views');

const viewList = function(req, res){
    res.render('index',{ time:Date()});
}

const addView = function(req, res){
  
  var id =req.body.id;
  var title =req.body.title;
  var des =req.body.description;
  var pre =req.body.preview;
  var pic =req.body.picture;

  listCnt = listCnt + 1;
  res.render('add',{_title: title
                    ,_des :des
                    ,_pre :pre
                    ,_pic :pic 
                    ,_id  :id                 
                    ,_cnt :listCnt});
  
  
}

const delView = function(req, res){
  var id =req.body.id;
  var title =req.body.title;
  var des =req.body.description;
  var pre =req.body.preview;
  var pic =req.body.picture;

  listCnt = listCnt -1;
  
  res.render('del',{_title: title
    ,_des :des
    ,_pre :pre
    ,_pic :pic 
    ,_id  :id                 
    ,_cnt :listCnt});
  
  
}

app.get('/',viewList);
//app.get('/add',onClickAdlsd);
//app.get('/',add);

app.post('/add', addView);
//app.post('/des', desView);
app.post('/del', delView);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
