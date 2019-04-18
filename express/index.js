// calling a Express module
const express = require('express')

// creating a server using express
const app = express()


// calling path moduke
const path =require('path')



app.get('/',(request,response)=>{
    
    
    response.sendFile(path.resolve(__dirname,'index.html'))
    
 /*  response.json(
   
   {
       name: 'Home Page parsing'
   }
   ) */
    
})



app.get('/about',(request,response)=>{
    
   response.send(
   
   {
       name: 'Nujoo Nazar'
   }
   ) 
    
})

app.listen(3000,()=>{
    
    
    console.log('App listening on port 3000')
})
