const programador = {
    nome: "Gustavo",
    idade: 26,
    tecnologias: [
        {nome: "Java", especialidade: "Desktop"},
        {nome: "PHP", especialidade: "Web"}
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e utiliza as seguintes tecnologias: ${programador.tecnologias[0].nome} para ${programador.tecnologias[0].especialidade} e ${programador.tecnologias[1].nome} para ${programador.tecnologias[1].especialidade}`)