module.exports = {
    age: function(timestamp) {
        const today = new Date()
        const birthday = new Date(timestamp)

        let age = today.getFullYear() - birthday.getFullYear()
        const month = today.getMonth() - birthday.getMonth()

        if(month < 0 || month == 0 && today.getDate() <= birthday.getDate()) {
            age = age - 1
        }

        return age
    },

    date: function(timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return `0${year}-${month}-${day}`
    },

    graduation: function(schooling) {
        if(schooling == 'medio') return 'Ensino Médio'
        if(schooling == 'superior') return 'Ensino Superior'
        if(schooling == 'mestrado') return 'Mestrado'
        if(schooling == 'doutorado') return 'Doutorado'
    }
}