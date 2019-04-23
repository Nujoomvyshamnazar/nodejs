
// connecting mangodb

const express = require('express')

const bodyParser = require('body-parser')

const path = require('path')
//const mongoose = require('mangoose')
const mongoose = require('mongoose')
// Creating Server Instance
const app = new express()


// calling path module



mongoose.connect('mongodb://localhost/node-js-blog')



// calling express Edge Template engine
const expressEdge = require('express-edge')

const Post = require('./database/models/Post')

// adding assets to your project

app.use(express.static('public'))


// using express edge in App
app.use(expressEdge)

app.set('views', `${__dirname}/views`);





app.use(bodyParser.json())


app.use(bodyParser.urlencoded({ extended: true }))


// calling pages index.html


/*
app.get('/',(req,res)  =>
       
     {

res.sendFile(path.resolve(__dirname,'pages/index.html'))
             
}  
       
       )
       */

// rendering Index

app.get('/', async (req,res) => {
    
    const posts = await Post.find({})
    
    
    console.log(posts)
    
    res.render('index',{
        
        posts 
    })
    
})

// about page

/*
app.get('/about',(req,res)  =>
       
     {

res.sendFile(path.resolve(__dirname,'pages/about.html'))
             
}  
       
       )
*/

// rendering About page

app.get('/about',(req,res) => {
    
    res.render('about')
    
})


// post page


/*
app.get('/post',(req,res)  =>
       
     {

res.sendFile(path.resolve(__dirname,'pages/post.html'))
             
}  
       
       )

*/
app.get('/posts',(req,res) => {
    
    res.render('post')
    
})



// Post response data and redirect
app.post('/posts/store', (req,res) => {
    
 Post.create(req.body,(error,post)=>
     
            {
       res.redirect('/')
            }
           
           )  

    
})


// contact page
/*
app.get('/contact',(req,res)  =>
       
     {

res.sendFile(path.resolve(__dirname,'pages/contact.html'))
             
}  
       
       )


*/

// rendering Index

app.get('/posts/new',(req,res) => {
    
    res.render('new')
    
})


app.get('/contact',(req,res) => {
    
    res.render('contact')
    
})



// listening to the port 4000

// npm install nodemon --save-dev // adding nodemon only for development
app.listen(4000,()=>
        {  

 console.log('App Listening to the port 4000') 
}
        
          )