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
                        console.log(chunks);
                    })
                    .on("end",()=>{
                        body = JSON.parse(body);
                        console.log("data: ", body);
                    });
            }else{
                response.writeHead("500");
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

    