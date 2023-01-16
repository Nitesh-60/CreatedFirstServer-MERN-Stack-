const express = require("express");

// initialization
const app = express();

app.use(express.json());

const PORT = 8081;

const todoList = ["Complete Node Byte", "Play Cricket"];

// GET Method
app.get("/todos",(req,res)=>{
    res.status("200").send(todoList);
})

// Post Method
app.post("/todos",(req,res)=>{
    let newItem = req.body.item;
    todoList.push(newItem);
    res.status("200").send({
        message: "task added succesfully"
    });
})

// Delete Method
app.delete("/todos",(req,res)=>{
    let deleteThis = req.body.item;

    // Logic
    todoList.find((element,index)=>{
        if(element === deleteThis){
            todoList.splice(index,1);
        }
    })
    
    res.status(203).send({
        message: `${deleteThis} deleted succesfully`
    })
})

app.all("/todos",(req,res)=>{
    res.status("501").send()
})

app.all("*",(req,res)=>{
    res.status("404").send()
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})