const { fetchUserbyId } = require("../services/user.services") ;



const teste = async(req, res) => {

    res.send({loged:true, id:req.userId, validate:true})
}


module.exports = { teste };