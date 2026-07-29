const setGoal = async(req,res) =>{
    return res.status(200).json({
        "message":"Set Goals is working corectly"
    })
}

export { setGoal }