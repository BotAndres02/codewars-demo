/**
 * 
 * create a searcher using an array and objects
 */

var searcher = function(parameter){
    let costumers= [
        {id: 1, name: 'Ana'},
        {id: 2, name: 'Andres'},
        {id: 3, name: 'Luis'},
        {id: 4, name: 'Emma'},
        {id: 5, name: 'Karol'}
    ];

    return costumers.filter((costumer)=>costumer.name.includes(parameter))
}
console.log(searcher('a'));