const mongoose = require('mongoose')


const Post = require('./database/models/Post')


mongoose.connect('mongodb://localhost/node-js-blog')


Post.findByIdAndUpdate("5cbc9be642422e3190f74d14",{
    
    title: 'This is my New lorem and ipsum nujoom'},
    (error,post)=>{
    
    console.log(error,post)
 
})