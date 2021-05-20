const express = require('express');
const { result } = require('lodash');
const mongoose = require('mongoose');
const Blog=require('./modules/blogs');
const blogRoutes=require('./Router/blogRoutes');
const authRoutes =require('./Router/authRoutes');
const cookieParser=require('cookie-parser');
const User=require('./modules/user');
const jwt = require('jsonwebtoken')
const app = express();
app.set('view engine','ejs');
app.listen(8000);


app.use(express.static('publik'));
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

//middlware for storing temporatry data of json form and convert them in JS for our use
app.use(express.json());
 
 //for taking any file from that folderwhich is mentioned in public without path here we are adding the css in header 
 
const dburl="mongodb://IUS_143:ayush_143@cluster0-shard-00-00.ws2x4.mongodb.net:27017,cluster0-shard-00-01.ws2x4.mongodb.net:27017,cluster0-shard-00-02.ws2x4.mongodb.net:27017/node-tits?ssl=true&replicaSet=atlas-mpvkz0-shard-0&authSource=admin&retryWrites=true&w=majority";
app.get('/',(req,res)=>{
    res.redirect('/blogs');

});
mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>console.log('connected to db'))
.catch((err)=>console.log(err));



app.get('/about',(req,res)=>{
    //  res.sendFile('./views/about.html',{root:__dirname});
    res.render('about', {title: 'ABOUT'})
});


app.get('/createBlog',(req,res)=>{
    res.render('createBlog', { title: 'Blog'});
})

   app.use(authRoutes);
   app.use('/blogs',blogRoutes);
    //error wala
    // if reaches this line means uper wala koi nhi h desired

