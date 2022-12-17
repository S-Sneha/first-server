// server with express

const express = require("express");
const app = express();     //initialization
app.use(express.json());   // so that application can use json format (each req and res will be triggered in json format)

const port = 8081;
const toDoList = ["Need to learn", "Need to code"];

// creating the route todos => http://localhost:8081/todos
 
app.get("/todos", (req,res) => {

  res.status(200).send(toDoList);
});

//We can add new item from body with the post method but it will get vanished once the server is refreshed, that is the changes are not persistent
app.post("/todos", (req,res) =>{
  
   let newToDoItem = req.body.item;
  toDoList.push(newToDoItem);
  res.status(201).send({
   message: "The new item got added successfully"
});

});

app.delete("/todos", (req,res) => {

   const ItemToDelete = req.body.item;
   toDoList.find((element,index) => {
    if(element === ItemToDelete){
      toDoList.splice(index,1);
    }
   });

   res.status(202).send({
     message : "Deleted item `${req.body.item}`"
   });
});


app.listen(port, () => {
  console.log(`Node js server started on ${port}`);
});