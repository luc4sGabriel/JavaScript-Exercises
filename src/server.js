const calculadora = require('./calculadora');

const express = require('express');

const server = express();

server.get('/', (request, response) => {
    return response.json({message : 'Ola, Mundo!'})
})

//1 Questao 
// Criar função em arquivo separado do arquivo que inicia o servidor Nodejs, que receba como parâmetro o ano atual e um ano de nascimento, retornando a idade de quem nasceu no ano recebido na função.
console.log(calculadora.idade(2021,1990));

//2 Questao 
// Criar função que retorne um novo array apenas com números pares, tendo como base o array abaixo:
// array: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15 ].

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const filter = array.filter(item => item % 2 == 0);
console.log(filter);

//3 Questao 
// Dado o objeto:
// programador = {
// 	nome: ‘Fulano da Silva’,
// 	stacks: [
// 	{
// 		nome: ‘Javascript’,
// 		note: 8
// },
// {
// 		nome: ‘Java’,
// 		note: 8
// },

// {
// 		nome: ’Node’,
// 		note: 10
// },
// {
// 		nome: ‘SQL’,
// 		note: 9
// }
// ]
// }
// Crie uma função que retorne as stacks com nota maiores ou iguais a 9

const programador = {
	nome: 'Fulano da Silva',
	stacks: [
	{
		nome: 'Javascript',
		note: 8
    },
    {
		nome: 'Java',
		note: 8
    },

    {
		nome: 'Node',
		note: 10
    },
    {
		nome: 'SQL',
		note: 9
    }
    ]
}

const ns = programador.stacks.filter(item => item.note >= 9);
console.log(ns) 

server.listen(3333, () => {
    //console.log("Server online on port 3333! :D");
});

// const stacks3 = ['Javascript', 'React', 'React-Native', 'Java'];
//     const stacks2 =  [{
//         id: 1,
//         nome: 'PHP',
//         tipada: true
        
//     },
//     {
//         id: 2,
//         nome: 'Node',
//         tipada: false
//     },
//     {
//         id: 3,
//         nome: 'JAVA',
//     }];

// const searchIndex = stacks.indexOf('87dkajhdi237e');

// stackfilter > -1 ? console.log('Tem no array') : console.log('Nao tem no array')

// const filter = stacks2.filter(item => item.nome == 'Node');

// console.log(filter);

// console.log(stackfilter);

// const newArray = stacks2.map((stack, index) => (
//     { ... stack, tipada: stack.nome === 'JAVA' ? true : false}
// ));

// console.log(newArray);

