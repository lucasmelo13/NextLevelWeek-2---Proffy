//Servidor
const express = require('express');
const server = express();

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')
//configurar nunjucks(template engine)
const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})
//Inicio e configuraçao do servidor
server
    .use(express.urlencoded({ extended: true }))
    //configurar arquivos estaticos (css , scripts , imagens)
    .use(express.static("public"))  //o .use fez com que o public fosse a raiz , ou seja o HTML e o CSS vai ser gerado corretamente
    //rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    //start do servidor
    .listen(5500)