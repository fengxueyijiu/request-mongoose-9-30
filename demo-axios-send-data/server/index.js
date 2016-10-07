var express = require('express');
var app = express();
var bodyParser=require('body-parser');    //3-4行首先装包bodyParser.然后用于命令行模拟curl -H详情笔记本   用于req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))    //yongyu浏览器地址栏：localhost:3000/write
app.post('/posts',function(req,res){


  console.log(req.body);  //xuyao一个包的支持即body-parser
})

app.listen(3000,function(){
  console.log('running on port 3000...')
})
