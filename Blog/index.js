// Calling Express  module After installing Express Package
const express = require('express')


// Creating Server Instance
const app = new express()


// listening to the port 4000

// npm install nodemon --save-dev // adding nodemon only for development
app.listen(4000,()=>
        {  

 console.log('App Listening to the port 4000') 
}
        
          )