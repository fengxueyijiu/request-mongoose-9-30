var express=require('express');
var app=express();
var bodyParser=require('body-parser');    //3-4行首先装包bodyParser.然后用于命令行模拟curl -H详情笔记本  (req.body也需要)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))    //yongyu浏览器地址栏：localhost:3000/write
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;      //清楚过期警告。
mongoose.connect('mongodb://localhost:27017/request-mongoose-9-30');
var db=mongoose.connection;
var Schema = mongoose.Schema;


//关闭同源策略，开放cors
var cors = require('cors');
app.use(cors());

db.on('error', console.log);
db.once('open', function() {
     console.log('success!')
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
     var gous= mongoose.model('Gou',PostSchema);
     var yizhigou=new gous({name:'puppy'});   //实例化
     console.log(yizhigou.name);
     yizhigou.save()

   });


app.listen(3000,function(){
    console.log("running on port 3000...")
})
