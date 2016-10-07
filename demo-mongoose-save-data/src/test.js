var express = require('express');
var app = express();
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/digicity-express-api')
// var db=mongoose.connection;
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
