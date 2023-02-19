/**
 * Write a program that stores the password string 
 * in a variable, prompt the user for the password
 *  until the correct password is entered.
 */

var password = prompt("Write your password")
if(password !== "AzbYxds" ){
    alert("Incorrect password");
}
else{
    alert("Signing in");
}