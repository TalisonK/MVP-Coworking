import { editUser } from "../services/user.services";

export const editProfile = async() => {
    const email = localStorage.getItem("user");
    const name = document.getElementById("nameinput").value;
    const birthday = document.getElementById("dateinput").value;
    const cpf = document.getElementById("cpfinput").value;
    const adress = document.getElementById("adressinput").value;
    const biografy = document.getElementById("biografyinput").value;
    const newEmail = document.getElementById("emailinput").value;

    let data = {
        email
    }
    
    if(name) { data.name = name }
    if(birthday) { data.birthday = birthday }
    if(cpf) { data.cpf = cpf }
    if(adress) { data.adress = adress }
    if(biografy) { data.biografy = biografy }
    if(newEmail) { data.newEmail = newEmail }

    const response = await editUser(data);

}