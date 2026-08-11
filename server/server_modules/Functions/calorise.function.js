function calculateTDEE(activity_level , bmr){
    let TDEE_OPP_VALUE = 0;
        switch (activity_level){
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
    return Math.round(TDEE_OPP_VALUE*bmr)
}

function calculateCalories(weakily_goals , tdee){
    if ( weakily_goals < 0 ){
        // console.log(Math.abs(weakily_goals))
        let calories = Math.abs(weakily_goals) * (7700 / 7)
        return tdee - calories
    }
    else if ( weakily_goals > 0 ){
        let calories = weakily_goals * (7700 / 7)
        return Math.round(tdee + calories)
    }
    else{
        return tdee
    }
    
}

export { calculateTDEE , calculateCalories }