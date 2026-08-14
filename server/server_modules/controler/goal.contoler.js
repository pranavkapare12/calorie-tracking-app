import { calculateTDEE, calculateCalories, getTarget } from "../Functions/calorise.function.js";
import prisma from "../database_connection/Pg.database_connection.js";


const setGoal = async (req, res) => {
    try {
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

        // --------------------------------
        // 1. Calculate BMI
        // --------------------------------

        const bmi =
            current_weight_kg /
            ((height_in_cm / 100) * (height_in_cm / 100));

        // --------------------------------
        // 2. Calculate Age
        // --------------------------------

        const today = new Date();

        const [day, month, year] = date_of_birth.split("-");

        let age = today.getFullYear() - Number(year);

        const birthMonth = Number(month) - 1;
        const birthDay = Number(day);

        if (
            today.getMonth() < birthMonth ||
            (
                today.getMonth() === birthMonth &&
                today.getDate() < birthDay
            )
        ) {
            age--;
        }

        // --------------------------------
        // 3. Calculate BMR
        // --------------------------------

        let bmr;

        if (gender === "male") {
            bmr =
                (10 * current_weight_kg) +
                (6.25 * height_in_cm) -
                (5 * age) +
                5;
        }
        else if (gender === "female") {
            bmr =
                (10 * current_weight_kg) +
                (6.25 * height_in_cm) -
                (5 * age) -
                161;
        }
        else {
            return res.status(400).json({
                message: "Invalid gender"
            });
        }

        bmr = Math.round(bmr);

        // --------------------------------
        // 4. Calculate TDEE
        // --------------------------------

        const tdee = Math.round(
            calculateTDEE(activity_level, bmr)
        );

        // --------------------------------
        // 5. Calculate Daily Calories
        // --------------------------------

        const dailyCalories = Math.round(
            calculateCalories(weakily_goals, tdee)
        );

        // --------------------------------
        // 6. Get Nutrition Rule
        // --------------------------------

        const target = getTarget(weakily_goals);

        const data = await prisma.nutrition_rules.findUnique({
            where: {
                name: target
            }
        });

        if (!data) {
            return res.status(400).json({
                message: "Nutrition rule not found"
            });
        }

        // --------------------------------
        // 7. Calculate Protein
        // --------------------------------

        const proteinG =
            Number(current_weight_kg) *
            Number(data.protien_g_per_kg);

        const proteinCalories = proteinG * 4;

        // --------------------------------
        // 8. Calculate Fat
        // --------------------------------

        const fatCalories =
            dailyCalories *
            (Number(data.fat_percentage) / 100);

        const fatG = fatCalories / 9;

        // --------------------------------
        // 9. Calculate Fiber
        // --------------------------------

        const fiberG =
            Number(data.fiber_g_per_day);

        // --------------------------------
        // 10. Calculate Carbs
        // --------------------------------

        const carbCalories =
            dailyCalories -
            (proteinCalories + fatCalories);

        const carbsG = carbCalories / 4;

        // --------------------------------
        // 11. Create Prisma Data
        // --------------------------------

        const userData = {
            date_of_birth: date_of_birth,

            height_cm: height_in_cm,

            current_weight_kg: current_weight_kg,

            target_weight_kg: target_weight_kg,

            goal_type: target,

            weakly_goal_kg: weakily_goals,

            activity_level: activity_level,

            gender: gender,

            bmi: Number(bmi.toFixed(2)),

            bmr: bmr,

            tdee: tdee,

            daily_calories: dailyCalories,

            protein_g: Number(proteinG.toFixed(2)),

            fat_g: Number(fatG.toFixed(2)),

            fiber_g: Number(fiberG.toFixed(2)),

            carbs: Number(carbsG.toFixed(2)),

            create_at: new Date(),

            update_at: new Date(),

            estimated_complete_date: new Date(),

            users: {
                connect: {
                    user_id: user_id
                }
            }
        };

        // --------------------------------
        // 12. Insert User Information
        // --------------------------------

        const ack = await prisma.user_info.create({
            data: userData
        });

        console.log("User Data Inserted Successfully");

        return res.status(201).json({
            message: "Goal created successfully",
            data: ack
        });

    } catch (err) {

        console.error(err);

        return res.status(500).json({
            message: "Failed to create goal",
            error: err.message
        });
    }
};

export { setGoal }