const User = require('../models/User');
const Spot = require('../models/Spot');


module.exports = {

async index(req, res){
 
    const { tech } = req.query;
     const spots = await Spot.find({  techs: tech });//filtra tecnologia de acordo com valor recebido em tech

     return res.json(spots);

},


async store(req, res) {

const { filename } = req.file; //busca nome entre colchetes dentro do caminho depois do igual
const { company, techs, price} = req.body;
const {user_id} = req.headers; //header envia contexto da aplicação (autenticação/idiomas)


const user = await User.findById(user_id);

if(!user){
return res.status(400).json({ error: 'User does not exists'})

}

const spot = await Spot.create({
   
    user: user_id,
    thumbnail: filename,
    company,
    techs: techs.split(',').map(tech => tech.trim()), //trim tira espaços antes e depois de string
    price
    
})

return res.json(spot)



}




};




