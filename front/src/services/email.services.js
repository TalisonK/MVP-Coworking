const axios = require("axios");

export const resendEmail = async(email) => {
    let data = {
        email:email
    }			
    const response = await axios.post( localStorage.getItem("url")+ "/email/resend", data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response;
}