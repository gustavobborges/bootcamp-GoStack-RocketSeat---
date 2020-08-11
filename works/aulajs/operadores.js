/*    Operadores Relacionais e Comparativos
== Igual
=== Igual e do mesmo tipo
!= diferente
!== diferente, inclusive do tipo
*/

/*   TESTES
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != "5");
console.log(5 !== "5");
*/

/*//DESAFIO1
const idade = 17;
//Verificar se a pessoa é maior de 18 anos
//se sim, deixar entrar, se não, bloquear a entrada
if (idade >=18) {
    console.log('Deixar entrar');
} else {
    console.log('Bloquear entrada');
}
//se a pessoa tiver 17 anos
//avisar para voltar quando fizer 18 anos
if (idade == 17) {
    console.log('Volte quando tiver 18');
}
*/
/* ================
OPERADORES LÓGICOS

&& - e
|| - ou
! - nega uma condição

===================*/
/*
console.log(5 === 5 && 6 == 6);
console.log(5 == 5 && 6 != 6);
console.log(5 === 5 || 6 == 6);
console.log(5 == 5 || 6 != 6);
console.log(!(5 > 6));
*/

// DESAFIO 1
const idade = 18;
//Verificar se a pessoa é maior de 18 anos
//se sim, deixar entrar, se não, bloquear a entrada
if (!(idade >=18) || idade === 17) {
    console.log('Bloquear entrada');
} else {
    console.log('Permitir entrada');

}
