const setGoal = async (req, res) => {
    const {
        user_id,
        date_of_birth,
        height_in_cm,
        current_weight_kg,
        target_weight_kg,
        weakily_goals,
        activity_level,
        gender
    } = req.body;

    let userData = req.body;
    
    // CALCULATE BMI (Body MASS INDEX) of User
    let bmi = (current_weight_kg / (height_in_cm * height_in_cm) * 10000)
    userData.bmi =Number(bmi.toFixed(2))
    
    // CALCULATE AGE OF THE USER 
    let date = new Date()
    let ageOperation = date_of_birth.split("-")
    let age =date.getFullYear() -  Number( ageOperation[2] )
    if(date.getMonth() - Number( ageOperation[1]) < 0)
        age--;
    userData.age = age;

    // CALUCULTING BMR (BASIC METABOLIC RATE) OF USRE
    if (gender === "male"){
        let bmr = (10 * target_weight_kg) + ( 6.25 * height_in_cm ) - ( 5 * age) + 5
        userData.bmr = bmr
    }
    else if(gender === "women"){
        let bmr = (10 * target_weight_kg) + ( 6.25 * height_in_cm ) - ( 5 * age) + 161
        userData.bmr = bmr
    }

    let TDEE_OPP_VALUE = 0;
    
    switch (weakily_goals){
        case "0":
            TDEE_OPP_VALUE = 1.2
            break
        
        case "1-3":
            TDEE_OPP_VALUE = 1.375
            break
        
        case "3-5":
            TDEE_OPP_VALUE = 1.55
            break;
        
        case "6-7":
            TDEE_OPP_VALUE = 1.725
            break;

        case "athlet":
            TDEE_OPP_VALUE = 1.90
            break
    }
    console.log(TDEE_OPP_VALUE)

    console.log(userData)

    


    return res.status(200).json({
        "data":  userData
    })
}

export { setGoal }