// basic server
 const http = require("http");
 const port = 8081;

 http.createServer((req,res) =>{
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h4> Hello, this is our own server </h4>");
    res.end();
 }).listen(port,() => {
    console.log(`My node.js server started on port ${port}`);
 });

 // To run: http://localhost:8081 