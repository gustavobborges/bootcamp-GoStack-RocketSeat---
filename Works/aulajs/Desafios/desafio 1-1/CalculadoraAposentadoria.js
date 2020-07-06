const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const total = idade + contribuicao;

if (sexo == "F") {
    if (total >= 85) {
        console.log(`${nome}, você está aposentada!`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar..` )
    }
} else {
    if (total >= 95) {
        console.log('Você enquanto homem está aposentado!')
    } else {
        console.log('Você enquanto homem ainda não está aposentado')
    }
}