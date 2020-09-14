import axios from 'axios';
import validator from 'validator';

const url = "http://localhost:3030"


//auxiliar method

const authenticate = (email, password) => {
	// console.log(validator.isEmail(email))
	// console.log(validator.isAlphanumeric(password))
	// console.log(password.length >= 6 );
    return validator.isEmail(email) && validator.isAlphanumeric(password) && password.length >= 6;
}

export const login = async() => {
	try{
		const email = document.getElementById("emailinput").value;
		const password = document.getElementById("passwordinput").value;
		console.log(email);
		if(authenticate(email, password)){
			let data = {
				email:email,
				password:password
			}			
			const response = await axios.post(url + "/login", data, {
                headers: {
                    'Content-Type': 'application/json'
                }
			})
			return response; 
		}
		else{
			const alert = document.getElementById("db");
			alert.style.visibility = "visible";
			alert.innerHTML = "Valores passados inválidos";
		}
	}
	catch(err) {
		console.log("Erro ao requisitar o login");
	}
}

export async function register(){
	try{
		const alert = document.getElementById("db");
		const email = document.getElementById("emailinput").value;
        const password = document.getElementById("passwordinput").value;
        let err = authenticate(email, password );
		if(err){
			let data = {
				email:email,
				password:password
			}
			const response = await axios.post(url + "/register", data, {
                headers: {
                    'Content-Type': 'application/json'
                }
			}) 
			if(!response.data.registration){
				alert.style.visibility = "visible";
				alert.innerHTML = response.data.status;
			}             
		}
		else{
			alert.style.visibility = "visible";
			alert.innerHTML = "Valores passados inválidos";
		}
	}
	catch(err) {
		console.log("Erro no login: " + err);
	}
}

export const editUser = async(props) => {
	console.log(props)
	if(props.email){
		const response = await axios.post(url + "/edituser", props, {
			headers: {
				'Content-Type': 'application/json'
			}
		}) 
		return await response;
	}
}
