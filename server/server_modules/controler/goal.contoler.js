import { calculateTDEE, calculateCalories, getTarget } from "../Functions/calorise.function.js";
import prisma from "../database_connection/Pg.database_connection.js";

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
    userData.bmi = Number(bmi.toFixed(2))

    // CALCULATE AGE OF THE USER 
    let date = new Date()
    let ageOperation = date_of_birth.split("-")
    let age = date.getFullYear() - Number(ageOperation[2])
    if (date.getMonth() - Number(ageOperation[1]) < 0)
        age--;
    userData.age = age;

    // CALUCULTING BMR (BASIC METABOLIC RATE) OF USRE
    if (gender === "male") {
        let bmr = (10 * target_weight_kg) + (6.25 * height_in_cm) - (5 * age) + 5
        userData.bmr = bmr
    }
    else if (gender === "women") {
        let bmr = (10 * target_weight_kg) + (6.25 * height_in_cm) - (5 * age) + 161
        userData.bmr = bmr
    }

    // Calulating TDEE (Total Daily Energy Expenditure) of User
    userData.tdee = calculateTDEE(activity_level, userData.bmr)

    // Calculate Calorise of User
    userData.daily_calories = calculateCalories(weakily_goals, userData.tdee)

    // console.log(userData)
    let target = getTarget(weakily_goals)

    let data = await prisma.nutrition_rules.findUnique({
        where: {
            name: target
        },
        include: {
            nutrition_targets: {
                select: {
                    nutrient_name: true,
                    target_value: true,
                    unit: true
                }
            }
        }
    });

    console.log(data)

    // userdata.protein_g =

    return res.status(200).json({
        "data": userData
    })
}

export { setGoal }