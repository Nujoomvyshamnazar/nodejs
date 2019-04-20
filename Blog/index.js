// Calling Express  module After installing Express Package
const express = require('express')

// calling path module
const path = require('path')


// Creating Server Instance
const app = new express()

// calling pages index.html

app.get('/',(req,res)  =>
       
     {

res.sendFile(path.resolve(__dirname,'pages/index.html'))
             
}  
       
       )


// adding assets to your project

app.use(express.static('public'))



// listening to the port 4000

// npm install nodemon --save-dev // adding nodemon only for development
app.listen(4000,()=>
        {  

 console.log('App Listening to the port 4000') 
}
        
          )