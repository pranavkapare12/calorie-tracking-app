import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    secure: true,
    host: process.env.HOST_EMAIL,
    port: Number(process.env.SMTP_PORT),
    auth:{
        user:process.env.ADMIN_EMAIL,
        pass:process.env.ADMIN_PASS
    }
})

async function sendMail(to,subject,text){
    try{
        let ack = await transport.sendMail({
            from:process.env.FROM,
            to:to,
            subject:subject,
            html:text
        })
        return ack
    }
    catch(err){
        return err
    }
}

export default sendMail;