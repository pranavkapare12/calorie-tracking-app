import joi from "joi"

const loginSchema = joi.object({
    email : joi.string().email({
        tlds:{allow : ['com']}
    }).required(),
    password : joi.string().required()
})

export { loginSchema }
