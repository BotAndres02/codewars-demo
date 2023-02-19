/**
 * Take the length of the section in kilometers and the time used, 
 * if the speed is between 40 and 60 km/h the driver passes the test 
 * otherwise he/she is disqualified.
 */

var length = parseInt(prompt("Insert the length"));
var time = parseInt(prompt("Insert the time"));
var speed = longitud/time;

if(speed >= 40 && speed <= 60 ){
    alert(`You pass the test with ${speed.toFixed(0)} km/h of speed`);
}else{
    alert(`You don't pass the test with  ${speed.toFixed(0)} km/h of speed`);
}
