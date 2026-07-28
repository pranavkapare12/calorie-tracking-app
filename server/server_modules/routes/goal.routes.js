import Router from "express"
const goatRoute = Router();

goatRoute.get("/hello",(req,res)=>{
    res.status(200).json({
        "message":"All is working corectly"
    })
})

export default goatRoute;