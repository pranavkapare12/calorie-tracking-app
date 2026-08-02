import { Resend } from "resend";

async function sendMain(){
    const resend = new Resend(process.env.RESEND_API_KEY)

    const {data} =await resend.emails.send({
        from:'onboarding@resend.dev',
        to:'healtcaloriestracker@gmail.com',
        subject:'Successfully create Email Service',
        text:'It Works !!!'
    })

    console.log(data)

}



export { sendMain }