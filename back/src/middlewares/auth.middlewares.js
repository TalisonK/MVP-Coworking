const jwt = require("jsonwebtoken");
require("dotenv/config")

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader) {
        return res.status(201).send({error: "No token provided!", validate: false});
    }

    const parts = authHeader.split(" ");

    if(!parts.length === 2){
        return res.status(201).send({ error:"token error", validate:false});
    }

    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme)){
        return res.status(201).send({error:"Token malformatted", validate: false})
    }

    jwt.verify(token, process.env.secret, (err, decoded) => {
        if(err) return res.status(201).send({erro: "Invalid Token", validate: false});

        req.userId = decoded.id;
        return next();
    })
}