/**
 * Write a program that prompts the user 
 * for a word and then displays on the screen one by one 
 * the letters of the word entered starting with the last letter.
 */

var word = "Tren";
for (let i = word.length; i >= 0; i--) {
    console.log(word.charAt(i));
}