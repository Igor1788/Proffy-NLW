// configuração do servidor e serviços
const express = require('express')
const server = express()

const { 
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses,
    pageSucess,
    RedirectStudyWithParameters
} = require('./pages')

// configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Configurar arquivos estáticos (css, scripts, imagens)
server
.use(express.urlencoded({ extended: true }))
.use(express.static("public"))
// Configuração das rotas de aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.get("/sucess", pageSucess)

.listen(5002)