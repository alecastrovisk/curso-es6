const usuario = {
    nome: 'Alex',
    idade: '22',
    endereço: {
        cidade: 'Rio do Norte',
        estado: 'AM',
    },
};

function mostraNome({nome, idade,...endereço}) {
    console.log(nome, idade, endereço);    
}

mostraNome(usuario);