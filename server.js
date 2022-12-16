// basic server
 const http = require("http");
 const port = 8081;
const toDoList= ["Need to learn","Need to code"];

 // To run: http://localhost:8081 
//http://localhost:8081/todos 

http.createServer((req,res) =>{
   const {method, url} = req;
   if(url ==="/todos"){         
      if(method === "GET"){
         res.writeHead(200,{"Content-Type": "text/html"});
         res.write(toDoList.toString());
      } else if(method === "POST"){
         let body = "";
         req.on("error",(err) =>{
            console.log(err);
         }).on('data',(chunk)=>{
            body+=chunk;
         }).on('end',() =>{
            body= JSON.parse(body);
            let newToDo = toDoList;
            newToDo.push(body.item);
            console.log(newToDo);
            res.writeHead(201);
         });
      } else if(method === "DELETE"){
         let body = "";
         req.on('error',(err) =>{
            console.log(err);
         }).on('data',(chunk)=>{
            body+=chunk;
         }).on('end',() =>{
            body= JSON.parse(body);
            let delete_item = body.item;
            for(let i = 0; i<toDoList.length; i++){
               if(toDoList[i] === delete_item){
                  toDoList.splice(i,1);
                  break;
               }
            }
            res.writeHead(201);
         });
      } 
      else {
         res.write(501);
      }
   }else{
      res.write(404);
   }
   res.end();

}).listen(port,() => {
   console.log(`My node.js server started on port ${port}`);
});