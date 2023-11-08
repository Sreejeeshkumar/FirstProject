const http=require('http')
const server= http.createServer((req, res)=>{
    const url=req.url
    //process.exit();
if (url === '/home'){
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Welcome home</h1></body>')
    res.write('</html>')
    res.end();
}
if(url==='/about'){
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Welcome to About Us page</h1></body>')
    res.write('</html>')
    res.end();
}
if(url==='/node'){
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Welcome to my Node Js project</h1></body>')
    res.write('</html>')
    res.end();
}
else {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>404 Error: Page Not Found</title></head>')
    res.write('<body><h1>404 Error: Page Not Found</h1></body>')
    res.write('</html>')
    res.end();
}
    // res.setHeader('Content-Type', 'text/html')
    // res.write('<html>')
    // res.write('<head><title>My First Page</title></head>')
    // res.write('<body><h1>Hello From My Node.js Server</h1></body>')
    // res.write('</html>')
    // res.end();
})

server.listen(3000)