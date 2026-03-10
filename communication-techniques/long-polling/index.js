import express from "express";
import path from "path"

const app = express();

const PORT = process.env.PORT || 4000;
let data = 'Initial data'
const waitingClientList=[]

app.use(express.static(path.join(import.meta.dirname, 'public')))
app.use(express.json())

app.get('/health', (_, res) => {
    res.json({
        success: true,
        message: "Health is ok."
    })
})

app.get('/getData', (req, res) => {
    const preData = req.query.last_data
    if (preData !== data) {
        return res.json({ success: true, message: "Data fetched successfully", data, updated: true })
    }
    else{
        waitingClientList.push(res)
    }
})

app.post('/updateData', (req, res) => {
    const newData = req.body.data
    data = newData;
    while(waitingClientList.length){
        const poppedReq= waitingClientList.pop()
        poppedReq.json({ success: true, message: "Data fetched successfully", data, updated: true })
    }
    res.json({
        success: true,
        message: "Data updated successfully"
    })
})

app.listen(PORT, () => {
    console.log("Server is listening on port: ", PORT)
})