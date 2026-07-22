import { loging , logout , signup } from "../controler/auth.controler.js"
import Routes from "express"

const app_route = Routes()

app_route.post('/login',loging)
app_route.post('/signup',signup)
app_route.post('/logout',logout)

export default app_route