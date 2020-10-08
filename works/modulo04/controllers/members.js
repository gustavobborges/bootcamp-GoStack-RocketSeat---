const fs = require('fs')
const data = require('../data.json')
const { age, date } = require('../utils')

//req.query.id -> pega da url
//req.body -> pega dos forms
//req.params -> pega os parametros da url


exports.index = function(req, res) {
    return res.render("members/index", { members: data.members })
}

exports.create = function(req, res) {
    return res.render("members/create")
}

exports.show = function(req, res) {
    //pegando o parâmetro
    const { id } = req.params

    const foundMember = data.members.find(function(member) {
        return id == member.id
    })

    if(!foundMember) return res.send("member not found!")
    
    const member = {
        ...foundMember,
        // birth: age(foundMember.birth),
    }

    return res.render("members/show", { member: member })
}

exports.post = function (req, res) {

    const keys = Object.keys(req.body)

    for(key of keys) {
        if (req.body[key]  == "") {
            return res.send("Favor preencher todos os campos")
        }
    }

    birth = Date.parse(req.body.birth)

    let id = 1
    const lastMember = data.members[data.members.lenght - 1]

    if(lastMember) {
        id = lastMember.id + 1
    }

    data.members.push ({
        id,
        ...req.body,
        birth
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write file error!")

        return res.redirect(`/members/${id}`)
    } )
}

exports.edit = function(req, res) {
    
    //pegando o parâmetro
    const { id } = req.params

    const foundMember = data.members.find(function(member) {
        return id == member.id
    })

    if(!foundMember) return res.send("member not found!")
    
    const member =  {
        ...foundMember,
        birth: date(foundMember.birth),
    }

    return res.render('members/edit', { member })
}

exports.put = function(req, res) {  
    const { id } = req.body

    let index = 0

    const foundMember = data.members.find(function(member, foundIndex) {
        if(id == member.id) {
            index = foundIndex
            return true
        }

    })

    if(!foundMember) return res.send("member not found!")

    const member = {
        ...foundMember,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)

    }

    data.members[index] = member

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if(err) return res.send("Write error!")

        return res.redirect(`/members/${id}`)
    })
}

exports.delete = function(req, res) {
    const { id } = req.body
    const filteredMembers = data.members.filter(function(member) {
        return member.id != id
    })

    data.members = filteredMembers

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if(err) return res.send("Write file error!")

        return res.redirect("/members")
    })
}