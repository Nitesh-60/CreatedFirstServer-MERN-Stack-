const http = require("http");

const PORT = 8081;

http
    .createServer((request, response)=>{
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello, this is my first server</h1>")
    response.end();
    })
    .listen(PORT,()=>{
    console.log(`Server is running in the port: ${PORT}`)
    });

    