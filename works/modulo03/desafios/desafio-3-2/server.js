const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const courses = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) {
    const about = {
        name: "Rocketseat",
        url_img: "https://yt3.ggpht.com/a/AATXAJwSX58F1bJzQBZYiioJa36NuvznvNpsEVDfmc7qfg=s900-c-k-c0xffffffff-no-rj-mo",
        description: "Empresa de educação focada em desenvolimento full-stack com as melhores tecnologias",
        techs: [
            { name: "Javascript" },
            { name: "Typescript" },
            { name: "Node Js" },
            { name: "React" },
            { name: "React Native" },
        ],
        links: [
            {name: "Github", url: "https://www.github.com/gustavobborges"},
            {name: "Linkedin", url: "https://www.linkedin.com/in/gustavo-de-borja-borges-962726145/"}
        ]
    }

    return res.render("about", { about: about })
})

server.get("/courses", function(req, res) {
    return res.render("courses", { items: courses })
})

server.use(function(req, res) {
    res.status(404).render("not-found")
})

server.listen(5000, function() {
    console.log("server is running...")
})

