import { hashPassword,compareHash } from "../Functions/crypto.functions.js";
import { compareSync } from "bcrypt";
import { generateToken } from "../Functions/token.function.js";
import cookieParser from "cookie-parser";
import prism from "../database_connection/Pg.database_connection.js";

const loging = async (req, res) => {
    const { email, password } = req.body;

    const data = await prism.users.findFirst({
        where:{
            email: email
        }
    })
    console.log(data)
       
    // let getCookie = generateToken(userDbResult._id);
    // const userData = {
    //     _id: userDbResult._id,
    //     username: userDbResult.username,
    //     email: userDbResult.email,
    //     type: userDbResult.type,
    //     createAt: userDbResult.createdAt
    // }
    // res.cookie('Grocery_User', getCookie, {
    //     httpOnly: true,
    //     secure: true,
    //     sameSite: "none",
    //     path: "/",
    //     maxAge: 7 * 24 * 60 * 60 * 1000
    // })
    // let userDate = "Hello From the user"

    // req.userData = userData;
    return res.status(201).json({"message":"All Is Working Correctly"})
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

export { loging, logout, signup }