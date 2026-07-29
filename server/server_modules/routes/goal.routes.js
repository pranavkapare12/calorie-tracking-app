import Router from "express"
import { setGoal } from "../controler/goal.contoler.js";
const goatRoute = Router();

goatRoute.get("/hello",(req,res)=>{
    res.status(200).json({
        "message":"All is working corectly"
    })
})

goatRoute.post("/setgoal",setGoal)
export default goatRoute;