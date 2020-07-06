const arr = [1, 2, 3, 4, 5];

//map para iterar um array
const newArr = arr.map(function(item, index){
    return item + index;
});

console.log(newArr);

//Soma dos itens de um array com reduce
const sum = arr.reduce(function(total, net){
    return total + net;
})

console.log(sum);


//Retornando somente numeros pás com filter
const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item){
    return item === 4;
})

console.log(find);
