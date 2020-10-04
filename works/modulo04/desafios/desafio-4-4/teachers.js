const fs = require('fs')
const data = require('./data.json')

//create
exports.post = function(req, res) {
    const keys = Object.keys(req.body)

    for(key of keys) {
        if(req.body[key] == "") {
            return res.send("favor preencher todos os campos")
        }
    }

    let { avatar_url, name, birth, schooling, classType, theme } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)

    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        schooling,
        classType,
        theme,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function() {
        if (err) return res.send("Wrhite file error!")

        return res.redirect("/teachers")
    })
}