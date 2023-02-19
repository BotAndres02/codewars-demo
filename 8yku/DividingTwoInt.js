/**
 * Ask for two integers and return the quotient of dividing 
 * the first by the second, but if this is zero
 * it should throw an error message.
 */

//first way
var num1 = 6;
var num2 = 2;
var result = num1 / num2;
console.log(num1 == 0 || num2 == 0 ? "Error":`${result}`);

//Second way 
if(num1 === 0 || num2 === 0){
    console.log('Error');
}else{
    console.log(result);
}