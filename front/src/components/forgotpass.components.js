import axios from 'axios';
import { resendEmail } from "../services/email.services";

export const alertcolor = (state, mes) => {
    const alert = document.getElementById("db");
    alert.style.visibility = "visible";
    if(state){
        alert.style.color = "#155724";
        alert.style.backgroundColor="#d4edda";
        alert.style.borderColor="#c3e6cb";
    }else{
        alert.style.color = "#721c24";
        alert.style.backgroundColor="#f8d7da";
        alert.style.borderColor="#f5c6cb";
    }
    alert.innerHTML = mes;
}


export const resetpassword = async() => {
    const email = document.getElementById("emailinput").value;
    localStorage.setItem("email", email)
    const response = await resendEmail(email);

    if(response.data.status){
        const label = document.getElementById("forgetchaveL");
        const row = document.getElementById("forgetchaveR");

        label.style.visibility = "visible";
        row.style.visibility= "visible";
        alertcolor(response.data.success, response.data.status, alert);
    }
}

export const validating = async() => {
    const alert = document.getElementById("db");
    const token = document.getElementById("validateinput").value;
    const email = localStorage.getItem("email");
    let data = {
        email:email,
        token:token
    }

    const response = await axios.post(localStorage.getItem("url") + "/email/validation", data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(response.data.status){
        const label = document.getElementById("forgetsenhaL");
        const row = document.getElementById("forgetsenhaR");

        label.style.visibility = "visible";
        row.style.visibility= "visible";
        alertcolor(response.data.success, response.data.status, alert);
        
        alert.style.visibility = "visible";
        alert.innerHTML = response.data.status;
    }

    if(response.data.validation){
        const label = document.getElementById("forgetsenhaL");
        const row = document.getElementById("forgetsenhaR");

        label.style.visibility = "visible";
        row.style.visibility= "visible";
        alertcolor(response.data.success, response.data.status, alert);

        localStorage.setItem("reset", "valid");
        return true;
    }
    else{
        return false;
    }
}

export const change = async() => {
    const pass = document.getElementById("passwordinput").value;
    const email = document.getElementById("emailinput").value;

    console.log(email)
    console.log(pass)
    let data = {
        email:email,
        password:pass
    }
    const response = await axios.post(localStorage.getItem("url") + "/edituser", data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
}