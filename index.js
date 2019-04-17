const http = require('http')

const server = http.createServer((request,response)=> { 

console.log(request.url)

    
  // response.end('About Us Page')
    
    if(request.url=== "/about")
        {
             response.end('About Us Page')
        }
    else if(request.url=== "/")
            {
            response.end('Home Page')
            }
    
    else if(request.url==="/contact")
        {
            response.end('Contact us')
        }
    
    else
        {
            response.writeHead(404)
            
            response.end('<b>This page is Not Found</b>')
        }
})


server.listen(3000)


