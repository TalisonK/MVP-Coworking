//Required Standart Modules
const validator = require("validator");
const Cryptojs = require("crypto-js");

// Required implemented methods
const { createUser, hasUser, fetchUser, check, editUser } = require("../services/user.services");
const { createConfirmToken } = require("./email.controller");
const { generateToken } = require("../services/auth.services");
const mailer = require("../services/emailhandler.services");

//Required configs
require("dotenv/config");

//implemented methods
const authenticate = (props) => {
    return validator.isEmail(props.email) && validator.isAlphanumeric(props.password) && props.password.leght >= 6;
}

//User Login function
const login = async(req, res) => {
    try{
        let err = await authenticate(req.body);
        if(err) {throw "Erro na autenticação";}

        const data = await fetchUser(req.body.email);

        if(data) {
            let password = Cryptojs.AES.decrypt(data.password, process.env.KEY_ENCRYPTION).toString(Cryptojs.enc.Utf8);

            if(password === req.body.password){
                const user = data;
                user.password = undefined;

                res.status(200).send({ status: "Login efetuado com sucesso!", success:true, user, token:generateToken({ id:user.id }) });
            }
            else{res.status(202).send({status: "Senha incorreta!", success: false})};
        }
        else{
            res.status(202).send({status: "Email não cadastrado!", success: false});
            return null;
        };
    }
    catch(err) {
        res.status(202).send({status:"erro inesperado", success:false});
    }
};

// Registers a new user
const register = async (req, res) => {
    try{
        if(authenticate(req.body)) throw "Erro de autenticação";
        const cond = await hasUser(req.body.email);
        if( cond ) {
            res.status(202).send({ status: "Usuário ja cadastrado!", registration:false}) ;
        }
        else{
            const cripto = Cryptojs.AES.encrypt(req.body.password, process.env.KEY_ENCRYPTION);
            await createUser(req.body.email, cripto);            
            await createConfirmToken(req.body.email);
            const user = await fetchUser(req.body.email);
            user.password = undefined;

            return res.status(200).send(
                {
                    status:"Cadastrado com sucesso!",
                    registration:true,
                    user,
                    token:generateToken({id:user._id})
                })
        }
    }
    catch(err) {
        console.log("erro" +err);
        return res.status(202).send({ status : "Erro ao efetuar o login", registration:false });
    }
};

const UserEdit = async(req, res) => {
    try{
        const user = req.body;
        console.log(req)
        for(let i in user ){
            if(i ==="password"){
                user[i] = Cryptojs.AES.encrypt(user[i], process.env.KEY_ENCRYPTION);
            }
            if(i === "newEmail"){
                user.confirmedEmail = false;
                await editUser({email:req.body.email}, "email", user[i])
            }
            else{
                await editUser({email:req.body.email}, i, user[i])
            }
        }
        res.status(200).send({ status:"Alterações efetuadas", success:true })
    }
    catch(err){
        res.status(202).send({ status:"erro ai cadastrar as alterações" , success:false})
    }
}

module.exports = { login, register, UserEdit }