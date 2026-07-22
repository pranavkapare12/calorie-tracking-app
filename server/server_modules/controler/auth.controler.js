import { hashPassword,compareHash } from "../Functions/crypto.functions.js";
import { compareSync } from "bcrypt";
import { generateToken } from "../Functions/token.function.js";
import cookieParser from "cookie-parser";
import connection from "../database_connection/Pg.database_connection.js";

const loging = (req, res) => {
    const { email, password } = req.body;
   
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

const signup = (req, res) => {
    const { username, email, password, type } = req.body;
    // let conn = mongoDb();
    // let ack = await User.findOne({
    //     email: email
    // })

    // if (ack) {
    //     return res.status(409).json({
    //         message: "USER ALREADY EXIST"
    //     })
    // }
    // let hash = await hashPassword(password);

    // let result = await User.create({
    //     username: username,
    //     email: email,
    //     password: hash,
    //     type: type
    // })


    // let getToken = generateToken(result._id);
    // const userData = {
    //     _id: result._id,
    //     username: result.username,
    //     email: result.email,
    //     type: result.type,
    //     createAt: result.createdAt
    // }
    // res.cookie('Grocery_User', getToken, {
    //     httpOnly: true,
    //     secure: true,
    //     sameSite: "none",
    //     path: "/",
    //     maxAge: 7 * 24 * 60 * 60 * 1000
    // });

    return res.status(201).json({"message":"Sign Up is Working Correctly"});
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