/**
 * Write a program that asks for two numbers 
 * and writes on the screen which is the larger one.
 */

//If-else
var x = prompt("number 1"), y = prompt("number 2");
if (x>y){document.write(x + " is older");}
else{document.write(y + " is younger");}


//Switch
var x = prompt("Insert the first number");
var y = prompt("Insert the second number");

var x = prompt("Insert n1"); 
var y = prompt("Insert n2");
switch(x > y || x < y || x==y){
    case x > y:
        document.write(x + " is older");
        break;
    case x < y:
        document.write(y + " is younger");
        break;
    case x == y:
        document.write("They're equals")
}