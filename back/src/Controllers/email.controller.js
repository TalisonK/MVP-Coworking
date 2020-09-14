const User = require("../database/models/User");
const { fetchUser, validateUser, check, hasUser } = require("../services/user.services");
const mailGen = require("../services/emailhandler.services");

const tokenStorage = {};

const emailConfirmationCheck = (email) =>{
    const data = fetchUser(email);
    if ( data.confirmedEmail ) return true;
    return false;
}

const createConfirmToken = (email) =>{
    tokenStorage[email] = Math.floor(100000 + Math.random() * 900000);
    mailGen(email, tokenStorage[email], "Email confirmation");
}

const authenticateEmail = (req, res) =>{
    try{
        console.log(tokenStorage[req.body.email]);
        if(tokenStorage[req.body.email] === req.body.token){
            validateUser(req.body.email);
            tokenStorage[req.body.email] = undefined;
            res.status(202).send({status: "Email confirmado com sucesso! :)", validation: 1});
        }
        else{
            res.status(203).send({ status:"Código inválido!", validation: 0 })
        }
    }
    catch(err){
        res.status(203).send({ status:"Erro ao verificar o email.", validation:0 })
    }
    
}

const resendConfirmation = async(req, res) => {
    try{
        const cond = await hasUser(req.body.email);
        console.log(cond);
        if(cond){
            tokenStorage[req.body.email] = Math.floor(100000 + Math.random() * 900000);
            mailGen(req.body.email, tokenStorage[req.body.email], req.body.message);
            res.status(200).send({ status: "Código enviado para o email " + req.body.email , success:true})
        }
        else{
            res.status(202).send({ status: "email não cadastrado", success:false })
        }
        
    }
    catch(err){
        console.log(err);
    }
}

const checkEmail = async (req, res) => {
    const cond = await check(req.body.email);
    if(cond){
        res.status(200).send({ status: true });
    }
    else{
        res.status(200).send({ status: false });
    }
}

const validation = async(req, res) => {
    try{
        console.log(tokenStorage[req.body.email]);
        if(tokenStorage[req.body.email] == req.body.token){
            tokenStorage[req.body.email] = undefined;
            res.status(202).send({status: "validado com sucesso! :)", validation: 1});
        }
        else{
            res.status(203).send({ status:"Código inválido!", validation: 0 })
        }
    }
    catch(err){
        res.status(203).send({ status:"Erro ao verificar o email.", validation:0 })
    }
}

module.exports = { emailConfirmationCheck, createConfirmToken, authenticateEmail, resendConfirmation, mailGen, checkEmail, validation };