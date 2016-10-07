var express = require('express');
var app = express();
var mongoose=require('mongoose');  //在js代码中导入mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/digicity-express-api') //进行数据库的连接
var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {                      //6-10行 后台执行$ node test.js 输出succes！则代表连接成功
  console.log('success!')
});
var Schema=mongoose.Schema;
var PostSchema=new Schema(
  {title:String,
    content:String
  }
  );
var Post = mongoose.model('Post',PostSchema);
app.post('/posts', function(req, res){
  console.log('run post.save()');
  var post = new Post({title:"myTitle", content: "myConent"})
  post.save(function(err){
    if(err) return console.log(err);
    console.log('saved');
  });

});

app.listen(3000, function(){
  console.log('running on port 3000.....');
});
