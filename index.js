let express = require('express');
let app = express();
let path = require('path');
// let bodyParser = require('body-parser');    //引入body-parser模块，来解析post请求

// create application/json parser
// let jsonParser = bodyParser.json()

// // create application/x-www-form-urlencoded parser
// let urlencodedParser = bodyParser.urlencoded({ extended: false })

//配置引擎模板以及静态文件访问文件夹
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'view'));
app.engine('html',require('ejs').__express);
app.use(express.static(path.join(__dirname,'static')));

//首页
app.get(['/','/index','/index.html'],(req,res,next) => {
  res.render('index.html');
});

app.get('/result-dom', function (req, res,next){
  console.log(req.query)
  res.render('result-dom.html')
})

app.get('/result-ejs', function (req, res,next){
  console.log(req.query)
  res.render('result-ejs.html', {keywords: req.query.keywords})
})

app.get('/result-reflect', function (req, res,next){
  console.log(req.query)
  res.set('Content-Type', 'text/html');
  res.end(`your keywords is ${req.query.keywords}`)
  // res.render('result.html', {keywords: req.query.keywords})
})

// app.get('/doSearch', urlencodedParser,  (req, res, next) => {
//   console.log(req)
//   const keywords = req.body.keywords
//   // res.json({
//   //   code: 1,
//   //   msg: '成功',
//   //   keywords: req.body.keywords
//   // })
//   res.render('result.html', {keywords})
// })

let hostname = '127.0.0.1';
let port = 3000;
app.listen(port,hostname,(err) => {
  if(err) throw err;
  console.log('server running at http://'+ hostname + ':' + port);
});
