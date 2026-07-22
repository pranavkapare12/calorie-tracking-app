import express from 'express'

const app = express();

app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).json({
        "message":"SERVER IS WORKING CORRECTLY"
    })
})

app.listen(3000,()=>{
    console.log("THE SERVER IS RUNNING ON 3000 PORT")
})