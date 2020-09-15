const axios = require("axios");


export const createmetting = async () => {
    const name = document.getElementById("nameinput").value;
    const owner = document.getElementById("ownerinput").value;;
    const room = document.getElementById("roominput").value;;
    const description = document.getElementById("descriptioninput").value;;
    const date = document.getElementById("dateinput").value;;
    const hour = document.getElementById("hourinput").value;;
    const members = document.getElementById("membersinput").value;;


    let data = {email:localStorage.getItem("user")};

    if(name)data.name = name;
    if(owner)data.owner=owner;
    if(room)data.room=room;
    if(description)data.description=description;
    if(date)data.date = date + "T" + hour;
    if(members) data.members=members;


    const response = await axios.post(localStorage.getItem("url") + "/home/addmetting", data, {
			headers: {
                'Content-Type': 'application/json',
                'authorization': "Bearer " + localStorage.getItem("token")
			}
		}) 
        
        
        console.log(response);
        return await response;
}