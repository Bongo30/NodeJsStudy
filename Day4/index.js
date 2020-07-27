var http = require('http');
const paserurl = require('url');
var fs=require('fs');

//create a server object:
http.createServer(function (req, res) {
  const { headers, method, url } = req; // es6 문법입니다...모르겠으면 카톡


  const pathname = paserurl.parse(url, true).pathname;

  if (pathname == '/') {
    if (method == 'GET') {
      console.log('method : ', method); // 자 여기 까지 GET
      console.log('url : ', url);
      const queryObject = paserurl.parse(url, true).query; // url을 파싱 해줍니다. object 형식 리턱
      
      var name = 'guest'
      var title = 'No Title'
      var test='testt'

      if(queryObject.name)
        name = queryObject.name
      if(queryObject.title)
        title = queryObject.title
      if(queryObject.test)
      test=queryObject.test
<<<<<<< HEAD:Day4/index.js

      url='/study.html';
      console.log('queryObject : ', queryObject);
      res.end(fs.readFileSync(__dirname + url));
// var write = fs.readFileSync(url);
// res.write(write);
=======
url='/study.html';
      console.log('queryObject : ', queryObject);
var write = fs.readFileSync(url);
res.write(write);
>>>>>>> a2b73b3d2e65aa38dc9041fb27a9e8c20e312abb:Day4/index.js

      
    }
    else {
      console.log('method : ', method);
    }

  } else {
    console.log('url : ', url);

  }

}).listen(8080); //the server object listens on port 8080
console.log('server start.... port : 8080');
