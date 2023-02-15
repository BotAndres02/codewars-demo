/**
 * Write a program that asks for a number 
 * and tells if it is divisible by 2.
 */

var numero = prompt("Ingrese un numero");
if (numero % 2 == 0) {
    document.write(numero + " es divisible");
} else{
    document.write(numero + " no es divisivle");
}