/**
 * Write a program that asks for two numbers 
 * and writes on the screen which is the larger one.
 */

//If-else
var x = prompt("numero 1"), y = prompt("numero 2");
if (x>y){document.write(x + " es mayor");}
else{document.write(y + " es mayor");}


//Switch
var x = prompt("Ingrese el numero 1");
var y = prompt("Ingrese el numero 2");

var x = prompt("Ingrese n1"); 
var y = prompt("Ingrese n2");
switch(x > y || x < y || x==y){
    case x > y:
        document.write(x + " es mayor");
        break;
    case x < y:
        document.write(y + " es mayor");
        break;
    case x == y:
        document.write("Son iguales")
}