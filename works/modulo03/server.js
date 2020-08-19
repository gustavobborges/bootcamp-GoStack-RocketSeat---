const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false //para ler o html das páginas
})

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://avatars1.githubusercontent.com/u/52687806?s=460&u=6caf52605d04364cd60e72fc6e85d9435f9de73e&v=4",
        name: "Gustavo Borges",
        role: "Developer - iBridge Technology",
        description: 'Programador full-stack com foco em UI e UX. Colaborador da <a href="www.ibridge.com.br" target="_blank">iBridge</a> e apaixonado por tecnologia!',
        links: [
            { name: "Github", url: "https://www.github.com/gustavobborges"},
            { name: "Linkedin", url: "https://www.linkedin.com/in/gustavo-de-borja-borges-962726145/"}
        ]
    }

    return res.render("about", { about: about })
})

server.get("/portfolio", function(req, res) {

    return res.render("portfolio", {items: videos})
})

server.use(function(req, res) {
    res.status(404).render("not-found")
})

server.listen(5000, function() {
    console.log("server is running...")
})

