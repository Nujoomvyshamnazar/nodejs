// calling a Express module
const express = require('express')

// creating a server using express
const app = express()


app.get('/about',(request,response)=>{
    
   response.json(
   
   {
       name: 'Nujoo Nazar'
   }
   ) 
    
})

app.listen(3000,()=>{
    
    
    console.log('App listening on port 3000')
})
