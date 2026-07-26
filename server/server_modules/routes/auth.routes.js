import { loging , logout , signup } from "../controler/auth.controler.js"
import { loginSchema } from "../validation/auth.schema.js"
import validate from "../middleware/validate.middleware.js"
import Routes from "express"

const app_route = Routes()

app_route.post('/login', validate(loginSchema) , loging)
app_route.post('/signup',signup)
app_route.post('/logout',logout)

export default app_route