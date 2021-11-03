// Exercise 1
function sum(number) {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total = total + arguments[i];
    }
    return total;
}
console.log(2, 9 ,4)

// Exercise 2
(function timer (){
setTimeout(function () {
    console.log("hello");
}, 1500);
setTimeout(function () {
    console.log("Goodbye!");
}, 3000);
})()
//Exercise 3

// Write a function that expects a number as an argument.
// If the value that is passed in is less than 0, equal to 0, or not a number, the function should return the string 'ERROR'. 
// If the number that is passed in is greater than or equal to 1000000 it should simply return the number. 
// Otherwise it should multiply the number by 10 however many times it takes to get a number that is greater than or equal to 1000000
//  and return that.

function greaterThan (number){
    if(number<=0 || number === NaN){
        return "ERROR"
    } else if (number >= 1000000){
        return number
    } else {
        
    }
}