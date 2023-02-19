/**
 * Create a list where you can store the information of each product with its
 * prices and total sales, show how much money the store will collect
 */

var sales = [
    {name: 'Camisa', price: 15, totalSales: 10 },
    {name: 'Pantalon', price: 50, totalSales:  15},
    {name: 'Chaqueta', price: 150, totalSales: 9},
    {name: 'Zapatos', price: 50, totalSales: 2}
]

var result = sales.reduce((acumu, product)=>{
    let TotalSales = product.price * product.totalSales;
    acumu[product.name] = ` $${TotalSales}`
    return acumu
}, {});


console.log(result);
