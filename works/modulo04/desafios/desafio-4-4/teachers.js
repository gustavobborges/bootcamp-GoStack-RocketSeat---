const fs = require('fs')
const data = require('./data.json')
const { age, date, graduation } = require('./utils')

//create
exports.post = function(req, res) {
    const keys = Object.keys(req.body)

    for(key of keys) {
        if(req.body[key] == "") {
            return res.send("favor preencher todos os campos")
        }
    }

    let { avatar_url, name, birth, schooling, classType, themes } = req.body

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
        themes,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function() {
        if (error) return res.send("Write file error!")

        return res.render("/teachers")
    })
}

//show
exports.show = function(req, res) {
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher) {
        return id == teacher.id
    })

    if(!foundTeacher) return res.send("Teacher not found!")

    const teacher = {
        ...foundTeacher,
        birth: age(foundTeacher.birth),
        schooling: graduation(foundTeacher.schooling),
        themes: foundTeacher.themes.split(","),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at)
    }

    return res.render("teachers/show", {teacher: teacher})
}

exports.edit = function(req, res) {
    const { id } = req.params
    
    const foundTeacher = data.teachers.find(function(teacher) {
        return id == teacher.id
    })

    if(!foundTeacher) return res.send("teacher not found!")

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth)
    }

    return res.render('teachers/edit', {teacher})
}