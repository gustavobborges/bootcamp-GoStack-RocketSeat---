// Criar um programa que calcula a média 
// das turmas de alunos e envia
// mensagem do cálculo da média.

//ARRAY

const alunosDaTurmaA = [
    {
        nome: "Gustavo",
        nota: 9.8
    },
    {
        nome: "Julina",
        nota: 10
    },
    {
        nome: "Theo",
        nota: 7
    },
    {
        nome: "Lena",
        nota: 10
    }
]

const alunosDaTurmaB = [
    {
        nome: "Márcio",
        nota: 5
    },
    {
        nome: "Mayana",
        nota: 4
    },
    {
        nome: "João",
        nota: 9
    },
    {
        nome: "Novo Aluno",
        nota: 10
    }  
]

function calculaMedia(alunos) {
    let soma = 0;
    for(let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
    if (media > 5) {
        console.log(`A média da turma ${turma} foi de ${media}. Parabéns!!`)
    } else {
        console.log(`A média foi ${media}.. Só rocha!`)
    }
}

// enviaMensagem(media1, 'turmaA')
// enviaMensagem(media2, 'turmaB')

//Marcar aluno como reprovado se a nota
// for menor que 5.
//Também enviar msg.

function marcarComoReprovado(aluno) {
        aluno.reprovado = false;
        if (aluno.nota < 5) {
            aluno.reprovado = true;
        }
}

function enviarMensagemReprovado(aluno) {
    if(aluno.reprovado) {
        console.log(`o Aluno ${aluno.nome} está reprovado!`)
    }
}

function alunoReprovado(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno)
        enviarMensagemReprovado(aluno);
    }
}

alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)
