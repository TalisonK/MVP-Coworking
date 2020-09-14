// Required Modules
    const express = require('express');
    const bodyparser = require('body-parser');
    const cors = require('cors')
    const morgan = require('morgan')
    const App = express();


//Modules configuration
//Body-Parser    
    App.use(bodyparser.urlencoded({extended: true}));
    App.use(bodyparser.json());

//Mongoose

    const {establishConnection} = require("./services/database.services");
    const mongoose = establishConnection();
    mongoose.connection.on("connected", () => { console.log("Conectado ao database! :)")})


//Client permissions
    App.use(cors());
    App.use(morgan("dev"));

//Routes
    const routes = require("./routes/index");

    App.use( '/', routes );

//Others
    const PORT = process.env.PORT || 3030;
    App.listen(PORT, ()  => {console.log("servidor ativo na porta: "+ PORT)})