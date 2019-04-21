const mongoose = require('mongoose')


const Post = require('./database/models/Post')


mongoose.connect('mongodb://localhost/node-js-blog')


Post.create({
    
   title: 'this is another title',
   description: 'Blog Post description',
   content: 'Blog Pst Content.'
    
    },(error,post)=>
     
            {
    console.log(error,post)
            }
           
           )