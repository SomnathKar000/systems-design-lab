import express from "express"
import path from "path" 

const app= express()

const PORT= process.env.PORT||4000

app.use(express.static(path.join(import.meta.dirname,'public')))
app.use(express.json())

app.get('/health',(_,res)=>{
    res.json({
        success:true,
        message:"Health is ok"
    })
})

app.listen(PORT,()=>{
    console.log("Server is listening on port: ",PORT)
})