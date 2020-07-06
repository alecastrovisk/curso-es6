
//Classe js
class List {
    constructor() {
        this.data = [];
    }    

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }   
}
//Herança js
class TodoList extends List {
    constructor() {
        super();
    }

}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('testando');   
}

//Classe Estática

class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1,2));


