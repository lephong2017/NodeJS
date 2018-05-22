var express = require("express");
var bodyParser = require("body-parser");
var parser = bodyParser.urlencoded({extended:false});
var app =express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");
app.listen(3000);

var arr=[
  {title: "22/05/2018", contents:"Hôm nay tôi rất vui"},
  {title: "23/05/2018", contents:"Hôm nay tôi vui"},
  {title: "24/05/2018", contents:"Hôm nay tôi không buồn!"}
 ];

app.get("/", function (req,res) {
  res.render("index");
});

app.post("/getNotes", function(req,res){
  res.send(arr);
});

app.post("/addNote",parser,function(req,res){
   var titleAdd= req.body.title;
   var contentsAdd = req.body.contents;
   arr.unshift({title:titleAdd, contents:contentsAdd});
   res.send(arr);
});
