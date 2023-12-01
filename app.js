const http = require('http');
const fs=require('fs')
const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);
    const url=req.url
    const method=req.method
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
       return res.end();
        console.log(req.url)
    }
    if(url === '/message' && method==='POST')
    {
        const body=[]
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk)         
        })
        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString()
            const message=parsedBody.split('=')[1]   
            console.log(message)
            fs.writeFileSync('message.txt', message)   
 
         })
 
         res.statusCode=302
            res.setHeader('Location','/')
            return res.end()
        }
    });

    server.listen(4000);