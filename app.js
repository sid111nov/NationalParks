var express = require("express");
var app = express();

//config
app.set('view engine', 'ejs');
var bod = require("body-parser");
app.use(bod.urlencoded({extended:true}));

app.use(express.static(__dirname + '/resources'));

//Routes
app.get("/",function(req,res){
    res.render("home");
});

app.get("/home",function(req,res){
    res.render("home");
});

app.get("/login",function(req,res){
    res.render("login");
});
app.get("/signup",function(req,res){
    res.render("signup");
});
app.get("/logout",function(req,res){
    res.render("home");
});
app.get("/NationalPark",function(req,res){
    res.render("NationalPark");
});
app.get("/post",function(req,res){
    res.render("post");
});
app.get("/post-display",function(req,res){
    res.render("post-display");
});
app.get("/profile",function(req,res){
    res.render("profile");
});

//listening port
app.listen(3000,function(){
    console.log("Server started");
});