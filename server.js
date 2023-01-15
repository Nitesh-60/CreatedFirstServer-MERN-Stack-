const http = require("http");

const PORT = 8081;

const todoList = ["Complete Node Byte", "Play Cricket"];

http
    .createServer((request, response)=>{
        const {method,url} = request
        if(url === "/todos"){
            if(method === "GET"){
                response.writeHead("200")
                response.write(todoList.toString())
            }
            else if(method === "POST"){
                let body = "";
                request
                    .on("error",(err)=>{
                        console.error(err);
                    })
                    .on("data",(chunks)=>{
                        body+=chunks;
                    })
                    .on("end",()=>{
                        body = JSON.parse(body);
                        let newTodo = todoList;
                        newTodo.push(body.item);
                        console.log(newTodo);
                        response.writeHead("201");
                    });
            }
            else if(method === "DELETE"){ 
                let body ="";
                request
                    .on("error",(err)=>{
                        console.error(err);
                    })
                    .on("data",(chunks)=>{
                        body+=chunks;
                    })
                    .on("end",()=>{
                        body = JSON.parse(body);
                        let deleteThis = body.item;

                        for(let i=0;i<todoList.length;i++){
                            if(todoList[i] === deleteThis){
                                todoList.splice(i,1);
                                break;
                            }
                        }

                        response.writeHead("204")
                    })
            }
            else{
                response.writeHead("501");
            }
        }
        else{
            response.writeHead("404")
        }
        response.end();
    })
    .listen(PORT,()=>{
    console.log(`Server is running in the port: ${PORT}`)
    });

    