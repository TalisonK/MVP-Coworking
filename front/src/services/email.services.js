const axios = require("axios");

const url = "http://localhost:3030";

export const resendEmail = async(email) => {
    let data = {
        email:email
    }			
    const response = await axios.post(url + "/email/resend", data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response;
}