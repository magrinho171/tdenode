const express = require("express");

const server = express();

const port = 3000;

server.get("/health", (req,res)=>
    res.send("Server is running")
)



server.listen(port,()=>
    console.log(`Server running on port ${port}`) 
)