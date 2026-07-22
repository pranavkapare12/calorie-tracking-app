import express from 'express'
import { config } from 'dotenv';
import auth_route from './server_modules/routes/auth.routes.js';
import cors from "cors"

config()

const app = express();
app.use(cors({
    "origin":"*",
    optionsSuccessStatus: 200  
}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).json({
        "message":"SERVER IS WORKING CORRECTLY"
    })
})

app.use("/api/auth",auth_route)

app.listen(3000,()=>{
    console.log("THE SERVER IS RUNNING ON 3000 PORT")
})