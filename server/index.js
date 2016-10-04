var express =require('express');
var app = express();
var bodyParser=require('body-parser');    //3-4行首先装包bodyParser.然后用于命令行模拟curl -H详情笔记本
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))    //yongyu浏览器地址栏：localhost:3000/write
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;      //清楚过期警告。
mongoose.connect('mongodb://localhost:27017/request-mongoose-9-30');
var Post=require('./models/post');
var db=mongoose.connection;


//关闭同源策略，开放cors
var cors = require('cors');
app.use(cors());




db.on('error', console.log);
db.once('open', function() {
     console.log('success!')
   });

app.get('/write', function (req, res) {
  var page ="<form method='post' action='/posts'>"+
              "<input type='text'  name='title'/>"+
              "<input type='submit' />"+
            "</form>"

  console.log('GET /posts')
  res.send(page)

})
app.get('/posts', function(req, res) {
  Post.find().exec(function(err, posts) {
      res.json({ posts: posts})
      });
    console.log('GET /posts')
  })
// app.get('/posts/:post_id', function (req, res) {
//   console.log('GET /posts/:id')
//   res.send('GET /posts/:post_id')
//
// })var express require('express')；


// app.put('/posts/:id',function (req,res){
//   console.log('PUT /posts/:id')
//   res.send('PUT /posts/:id')
// })
app.post('/posts/',function(req,res){
  console.log('POST /posts')
  // res.send('The Blog title is: '+req.body.title)
  res.redirect('/posts')
  var post =new Post({title:req.body.title});
  post.save(function(err){
    if(err)console.log(err);
    console.log('saved!')
  })

})
// app.delete('/posts/:id',function(req,res){
//   console.log('DELETE /posts/:id')
//   res.send('DELETE /posts/:id')
// })

app.listen(3000,function(){
    console.log("running on port 3000...")
})
