/** Write a program that asks the user his age and 
 * displays on the screen all the years he has 
 * reached (from 1 to his age).*/

var edad = prompt ("Ingrese su edad");
for (let i = 1; i <= edad; i++) {
    document.write("Usted ha cumplido: "+ i + " años. <br>");
}

/*/////////////////////DO-WHILE/////////////////////////////////*/
var edad = 10;
var i = 1;
count = 1;

do {
    console.log(i);
    count ++;
    i++;
} while (count <= edad);

var edad = "12"
console.log("usted tiene " + edad + " años");