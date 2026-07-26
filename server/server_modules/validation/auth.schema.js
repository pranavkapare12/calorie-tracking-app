import joi from "joi"

const loginSchema = joi.object({
    email : joi.string().email({
        tlds:{allow : ['com']}
    }).required(),
    password : joi.string().required()
})

const signUp_Schema = joi.object({
    user_name : joi.string().min(8).max(25).required(),
    email : joi.string().email().required(),
    password : joi.string().required(),
    profile_pic : ""
    
})

export { loginSchema , signUp_Schema}
