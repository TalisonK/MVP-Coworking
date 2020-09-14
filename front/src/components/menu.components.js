const axios = require("axios");

const url = "http://localhost:3030";

export const confirmedmail = async() =>{
    let data = {
        email:localStorage.getItem("user")
    }
    const response = await axios.post(url + "/email/confirmed", data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return ! await response.data.status;
}


export const sendemail = async() => {
    let data = {
        email:localStorage.getItem("user")
    }

    const response = await axios.post(url + "/email/resend", data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


export const authenticate = async() => {

    const email = localStorage.getItem("user");
    const token = Number.parseInt(document.getElementById("nameinput").value);

    let data = {
        email,
        token
    }


    const response = await axios.post(url + "/email/authenticate", data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


