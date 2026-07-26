import { loging , logout , signup } from "../controler/auth.controler.js"
import { loginSchema , signUp_Schema} from "../validation/auth.schema.js"
import validate from "../middleware/validate.middleware.js"
import Routes from "express"

const app_route = Routes()

app_route.post('/login', validate(loginSchema) , loging)
app_route.post('/signup', validate(signUp_Schema), signup)
app_route.post('/logout',logout)

export default app_route