/**
 * Write a program that prompts the user for a 
 * word and displays it on the screen 10 times.
 */

var word = prompt("Write a program");
for (let i = 0; i < 10; i++) {
    document.write(word + "<br>");
}