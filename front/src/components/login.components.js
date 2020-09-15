//Required services
import { login as request } from "../services/user.services";

export const login = async(props) => {
    try{
        const response = await request();
        const alert = document.getElementById("db");
        if(!response.data.success){
            alert.style.visibility = "visible";
            alert.style.innerHTML = response.data.status;
        }

        if( response.data.success){
            localStorage.setItem('user', response.data.user.email);
            localStorage.setItem('token', response.data.token);
            return true;
        }
        else{
            alert.innerHTML = response.data.status;
            return false;
        }
    }
    catch(err){
        console.log(err)
    }
}



export const resetToken = () => {
    localStorage.removeItem('token');
}