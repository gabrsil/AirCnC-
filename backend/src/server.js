const express = require('express') //require signfica que se trata de uma dependencia externa
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const app = express();

mongoose.connect('mongodb+srv://omnistack:react@omnistack-9ivhs.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//req recebe requisições do app, res devolve uma resposta para o client
//req.query executa query pattterns (para filtros)
//req.params acessa route params     (para edição/delete)
//req.body = acessar corpo da requisição (criação, edição)
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333); 