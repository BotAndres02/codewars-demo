/** Write a program that asks the user his age and 
 * displays on the screen all the years he has 
 * reached (from 1 to his age).*/

var age = prompt ("Insert your age");
for (let i = 1; i <= age; i++) {
    document.write("You are: "+ i + " years old. <br>");
}

/*/////////////////////DO-WHILE/////////////////////////////////*/
var age = 15;
var i = 1;
count = 1;

do {
    console.log(i);
    count ++;
    i++;
} while (count <= age);
console.log("You are " + age + " years old");