/**
 * Write a program that shows 
 * how many times a specified vowel is repeated.
 */

let word = 'Manzana';
let vowel = 'a';2

let count = 0;
for (let i = 0; i < word.length; i++) {
    if(vowel == word.charAt(i)){
        count++;
    }
}
console.log(`La palabra ${word} esta ${count} veces.`);