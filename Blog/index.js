
// connecting mangodb
//const mongoose = require('mangoose')

// Calling Express  module After installing Express Package
const express = require('express')

// Creating Server Instance
const app = new express()


// calling path module
const path = require('path')


//mongoose.connect('mongodb://localhost/node-js-blog')



// calling express Edge Template engine
const expressEdge = require('express-edge')


// adding assets to your project

app.use(express.static('public'))


// using express edge in App
app.use(expressEdge)

app.set('views', `${__dirname}/views`);




// calling pages index.html


/*
app.get('/',(req,res)  =>
       
     {

res.sendFile(path.resolve(__dirname,'pages/index.html'))
             
}  
       
       )
       */

// rendering Index

app.get('/',(req,res) => {
    
    res.render('index')
    
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
app.get('/post',(req,res) => {
    
    res.render('post')
    
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

app.get('/post/new',(req,res) => {
    
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