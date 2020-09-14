const nodemailer = require("nodemailer");
require("dotenv/config");
// Email sender account

const mailSender = {
    service:"gmail",
    auth:{
        user:process.env.EmailSender,
        pass:process.env.Emailpassword
    }
}

let transporter = nodemailer.createTransport(mailSender);


const mailer = (email, token, message) => {
    try{
        let mailOptions = {
            from:process.env.EmailSender,
            to:email,
            subject:message?message:"Email confirmation",
            text:" Your code is " + token
        }
        transporter.sendMail(mailOptions, (err, info) => {
            if(err)  {
                console.log(err);
                throw "Erro ao enviar email"
            }
            else {console.log("Email enviado para: " + info.response)}
        })
    }
    catch(err) {
        console.log(err);
    }
    
}

module.exports = mailer;



