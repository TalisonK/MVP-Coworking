const metting = require("../services/metting.services")

const addMetting = async(req, res) => {
    try{
        if( await metting.hasMetting(req.name) ){
            throw "O metting já está cadastrado!";
        }
        else{
            await metting.createMetting(req.body);
            res.status(202).send({status: "Metting cadastado com sucesso!", success: 1});
        }
    }
    catch(err){
        res.status(400).send({status: (err)?err:"Valores inválidos!", success: 0})
    }
}

const removeMetting = async(req, res) =>{
    try{
        const data = await metting.removeMetting(req.body.name);
        if(data){
            res.status(200).send({status:"Removido com sucesso", metting:data});
        }
        else{
            res.status(202).send({ status:"Metting nao foi encontrado" });
        }
    }
    catch(err){
        res.status(202).send({ status:"Erro ao remover o metting" });
    }
}


module.exports = { removeMetting, addMetting };