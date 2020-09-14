

//Required services
import { login as request } from "../services/user.services";

export const login = async(props) => {
    try{
        const response = await request();
        const alert = document.getElementById("db");
        if(!response.data.success){
            alert.style.visibility = undefined;
        }

        if( response.data.success){
            localStorage.setItem('user', response.data.user.email);
            localStorage.setItem('token', response.data.token);

            console.log(localStorage.getItem("user"))
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