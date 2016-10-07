var express = require('express');
var app = express();
var mongoose=require('mongoose');  //在js代码中导入mongoose
mongoose.connect('mongodb://localhost:27017/digicity-express-api') //进行数据库的连接
var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {                      //5-9行 后台执行$ node test.js 输出succes！则代表连接成功
  console.log('success!')
});
var Schema = mongoose.Schema;     
var PostSchema = new Schema(
  {
    name:String,
    category:String,
    content:String

  },
  {
    timestamps:true
  }
)
var catty= mongoose.model('Cat',PostSchema);
var cat=new catty({name:'mony'});   //实例化
console.log(cat.name);
cat.save();

app.post('/posts', function(req, res){
  console.log('hello');

});

app.listen(3000, function(){
  console.log('running on port 3000.....');
});
