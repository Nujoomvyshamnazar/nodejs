const mongoose = require('mongoose')


const Post = require('./database/models/Post')


mongoose.connect('mongodb://localhost/node-js-blog')


//find All data from mangodb

/*
Post.find({},(error,posts)=>{
    
    console.log(error,posts)
    
})

*/

//find unique id data from mangodb


Post.findById("5cbc9be642422e3190f74d14"
,(error,posts)=>{
    
    console.log(error,posts)
    
})



/*
Post.create({
    
   title: 'this is another title',
   description: 'Blog Post description',
   content: 'Blog Pst Content.'
    
    },(error,post)=>
     
            {
    console.log(error,post)
            }
           
           )
           
           
           */