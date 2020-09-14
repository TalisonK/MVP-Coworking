//Required Standart Modules
const jwt = require("jsonwebtoken");

//Required configs
const authConfig = require("../config/auth");

const generateToken = (id = {}) => {
    const token = jwt.sign(id,  authConfig.secret, {
        expiresIn: '24h',
    })
    return token;
}

module.exports = { generateToken }

