/**
 * Direct customers to the beverage bar or to the food bar, for this the customer 
 * can order wine, beer, soft drink, water. If he orders a beer or wine,
 *  he will be directed to the bar and if not, he will be directed to the store.
 */

var bebida = prompt("You can choose: wine, beer, water, soft drink , other" );

if(bebida == "beer" || bebida == "wine"){
    alert("Please, go to the bar");
}else if(bebida == "water" || bebida == "soft drink"){
    alert("Please, go to the store");
}else{
    alert("Error");
};