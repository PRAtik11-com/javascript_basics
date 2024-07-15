let num1 = 15
let num2 = 80

// Celsius to Fahrenheit
function celtofah(celsius) {
    return (celsius * 9/5) + 32;
}

// Fahrenheit to Celsius
function fahtocel(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

let swan1= celtofah(num1);
let swan2 = fahtocel(num2); 

console.log(num1 + "'C is " + swan1 + "'F");
console.log(num2 + "'F is " + swan2 + "'C");




