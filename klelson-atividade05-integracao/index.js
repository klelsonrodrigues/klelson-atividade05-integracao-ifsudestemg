
const express = require("express");
const app = express();
const path = require('path'); //enderço de cada rota const router-express. 
const Router = express.Router(); // trabalha com as rotas

const { engine } = require("express-handlebars");
app.engine('handlebars', engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault: true,
    },
}))
app.set('view engine', 'handlebars'); router.get('/', function (req, res) {
    res.render('index');
    router.get('/about', function (req, res) {
    })
})
res.sendFile(path.join(__dirname + '/about.html'));