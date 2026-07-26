const validate = (Schema) =>{
    return (req,res,next)=>{
        const { error } = Schema.validate(req.body)
        if (error){
            return res.status(400).json({"error":error})
        }
        next()
    }
}

export default validate;