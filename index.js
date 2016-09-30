var express =require('express');
var app = express();
var bodyParser=require('body-parser');
app.use(bodyParser.json());
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/request-mongoose-9-30');

app.get('/write', function (req, res) {
  var page ="<form method='post' action='/posts'>"+
              "<input type='text'  name='title'/>"+
              "<input type='submit' />"+
            "</form>"

  console.log('GET /posts')
  res.send(page)

})
app.get('/posts/:post_id', function (req, res) {
  console.log('GET /posts/:id')
  res.send('GET /posts/:post_id')

})
app.put('/posts/:id',function (req,res){
  console.log('PUT /posts/:id')
  res.send('PUT /posts/:id')
})
app.post('/posts/',function(req,res){
  console.log('POST /posts')
  res.send('The Blog title is'+req.body.title)
})
app.delete('/posts/:id',function(req,res){
  console.log('DELETE /posts/:id')
  res.send('DELETE /posts/:id')
})
app.listen(3000,function(){
    console.log("running on port 3000...")
})
