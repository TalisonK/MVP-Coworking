//Required Standart Modules
const jwt = require("jsonwebtoken");

const generateToken = (id = {}) => {
    const token = jwt.sign(id,  process.env.secret, {
        expiresIn: '24h',
    })
    return token;
}

module.exports = { generateToken }

