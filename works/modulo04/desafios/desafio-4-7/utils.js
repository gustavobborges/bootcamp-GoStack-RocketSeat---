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

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        } 
    },

    graduation: function(schooling) {
        if(schooling == 'medio') return 'Ensino Médio'
        if(schooling == 'superior') return 'Ensino Superior'
        if(schooling == 'mestrado') return 'Mestrado'
        if(schooling == 'doutorado') return 'Doutorado'
    },

    classYear: function(classY) {
        if(classY == '5f') return 'Ensino Fundamental - 5º Ano'
        if(classY == '6f') return 'Ensino Fundamental - 6º Ano'
        if(classY == '7f') return 'Ensino Fundamental - 7º Ano'
        if(classY == '8f') return 'Ensino Fundamental - 8º Ano'
        if(classY == '9f') return 'Ensino Fundamental - 9º Ano'
        if(classY == '1m') return 'Ensino Médio - 1º Ano'
        if(classY == '2m') return 'Ensino Médio - 2º Ano'
        if(classY == '3m') return 'Ensino Médio - 3º Ano'
    }
}