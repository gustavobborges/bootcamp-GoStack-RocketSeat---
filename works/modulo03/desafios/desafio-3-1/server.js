const express = require('express')

const server = express()

server.use(express.static('public'))

server.set("view engine", "html")

server.get("/", function(req, res) {
    return res.render("sobre")
})

server.get("/conteudos", function(res, res) {
    return res.render("conteudos")
})

server.listen(5000, function() {
    console.log("server is running...")
})