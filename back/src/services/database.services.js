//Required Standart Modules
    const mongoose = require('mongoose');
    require('dotenv/config');


//Establish connection with cluster
const establishConnection = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.Database, { useNewUrlParser: true, useUnifiedTopology: true });
    return mongoose;
}
    


// Module Exportation
    module.exports = {mongoose, establishConnection};