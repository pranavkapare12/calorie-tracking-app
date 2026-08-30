import { hashPassword,compareHash } from "../Functions/crypto.functions.js";
import { compareSync } from "bcrypt";
import { generateToken } from "../Functions/token.function.js";
import cookieParser from "cookie-parser";
import prism from "../database_connection/Pg.database_connection.js";
import sendEmail from "../services/EmailServic/EmailService.js";

const loging = async (req, res) => {
    const { email, password } = req.body;

    const data = await prism.users.findFirst({
        where:{
            email: email
        }
    })

    if (!data){
        return res.status(404).json({
            "message":"Invalid Email or Password"
        })
    }
    let comparePassword = await compareHash(password,data.password)

    if (!comparePassword){
        return res.status(404).json({
            "message":"Invalid Email or Password"
        })
    }  
    data.password = undefined;
    return res.status(200).json(
        {
            "message":"Successfull Login",
            data
        }
    )
}

const signup =async (req, res) => {
    const user = req.body;

    let ack = await prism.users.findFirst({
        where: {
            email: user.email
        }
    })

    if (ack) {
        console.log(ack)
        return res.status(409).json({
            message: "USER ALREADY EXIST"
        })
    }

    let hash = await hashPassword(user.password);
    user.password = hash;

    let result = await prism.users.create({
        data: user
    })

    if (!result) {
        return res.status(500).json({
            message: "SOMETHING WENT WRONG"
        })
    }
    result.password = undefined;

    return res.status(201).json({
        "message":"USER CREATE SUCCESSFULLY",
        "data": result
    });
}

const logout = (req, res) => {
    res.clearCookie('Grocery_User', {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/"
    });
    res.status(200).json({ message: "Cookie Clear" })
}

const sendMail = async (req,res) =>{
    const { email , otp } = req.body;
    let subject = "Cal Tracker Email Verification "
    let body = `<h4>OTP</h4> <p> Hello Uesr the otp of cal tracker ${otp} do Not share this otp</p>`
    let ack = await sendEmail(email,subject,body)
    if ((ack.accepted).length > 0)
        return res.status(200).json({ "message" : "Mail Send" })
    else if ((ack.rejected).length > 0)
        return res.status(501).json({ "message" : "Fail to Send Mail" })
}

export { loging, logout, signup, sendMail }