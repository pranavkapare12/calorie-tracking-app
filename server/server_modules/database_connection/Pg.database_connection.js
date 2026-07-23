import pg from "pg"
import dotenv from "dotenv"
dotenv.config()
let pv = process.env;
// console.log(pv.IN_PROCESS == "TRUE" ? pv.D_USER : pv.P_USER)
let pool =new pg.Pool({
    user: pv.IN_PROCESS == "TRUE" ? pv.D_USER : pv.P_USER,
    host: pv.IN_PROCESS == "TRUE" ? pv.D_HOST : pv.P_HOST,
    database : pv.IN_PROCESS == "TRUE" ? pv.D_DATABASE : pv.P_DATABASE,
    password : pv.IN_PROCESS == "TRUE" ? pv.D_PASSWORD : pv.P_PASSWORD,
    port : parseInt(pv.IN_PROCESS == "TRUE" ? pv.D_PORT : pv.P_PORT)
})

export default pool;
