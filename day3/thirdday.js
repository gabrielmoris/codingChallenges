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
function waitThenRun(theFunction){
    setTimeout(theFunction,1500)
}

waitThenRun(function() {
     console.log('Hello!');
     waitThenRun(function() {
         console.log('Goodbye!');
     }); 
 });



//Exercise 3

function greaterThan (number){
    if(number<=0 || isNaN(number)){
        return "ERROR"
    } else if (number >= 1000000){
        return number
    } else {
        return greaterThan(number *10)      
    }
}

//Bonus track

function rememberSum(number){
    var total = 0;
    return function sum(number) {
        total += number
        return total;
    }
}

var totalNumber = rememberSum();
totalNumber(4)
totalNumber(10)