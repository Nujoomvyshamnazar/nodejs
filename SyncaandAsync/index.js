const http = require('http')

const fs = require('fs')

const homepage = fs.readFile('homepage.html')

const aboutpage = fs.readFile('aboutpage.html')

const contactpage = fs.readFile('contactpage.html')

const server = http.createServer((request,response)=> { 

console.log(request.url)

    
  // response.end('About Us Page')
    
    if(request.url=== "/about")
        {
             response.end(aboutpage)
        }
    else if(request.url=== "/")
            {
           return  response.end(homepage)
            }
    
    else if(request.url==="/contact")
        {
            response.end(contactpage)
        }
    
    else
        {
            response.writeHead(404)
            
            response.end('<b>This page is Not Found</b>')
        }
})


server.listen(3000)


