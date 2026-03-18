import express from "express"
import path from "path"
import {createServer} from "node:http"

const app = express()
const server = createServer(app)

const PORT= process.env.PORT||4000

app.use(express.static(path.join(import.meta.dirname,"public")))

app.get('/health',(_,res)=>{
    res.json({
        success:true,
        message:"Health is ok"
    })
})

server.listen(PORT,()=>{
    console.log("Server is listening on port: ",PORT)
})