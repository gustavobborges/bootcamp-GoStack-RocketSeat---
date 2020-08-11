const classA = [
    {
        name: "Gustavo",
        grade: 9.8
    },
    {
        name: "Julina",
        grade: 10
    },
    {
        name: "Theo",
        grade: 7
    },
    {
        name: "Lena",
        grade: 10
    }
]
const classB = [
    {
        name: "Márcio",
        grade: 5
    },
    {
        name: "Mayana",
        grade: 4
    },
    {
        name: "João",
        grade: 9
    },
    {
        name: "Novo Aluno",
        grade: 10
    }
]

function calculateAverage(students) {
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }
    const avarage = sum / students.length
    return avarage
}

function sendMessage(avarage, turma) {
    if (avarage > 5) {
        console.log(`${turma} average:${avarage}. Congrats!!`)
    } else {
        console.log(`${turma} average:${avarage}. Is not good!!`)
    }
}

function markAsFlunked(student) {
    student.flunked = false
    if (student.grade < 5) {
        student.flunked = true;
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`${student.name} flunked!`)
    }
}

function studentsReprovado(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

const avarage1 = calculateAverage(classA)
const avarage2 = calculateAverage(classB)

sendMessage(avarage1, 'classA')
sendMessage(avarage2, 'classB')

studentsReprovado(classA)
studentsReprovado(classB)

