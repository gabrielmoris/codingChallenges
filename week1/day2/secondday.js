// Exercise 1

function logType (argument){
    let result = ""
    if (Array.isArray(argument)){
        result = "array!";
    } else if (argument === null) {
        result = "null!";
    } else if (typeof argument === "undefined") {
        result = "undefined!";
    } else if (typeof argument === "string") {
        result = "string!";
    } else if (typeof argument === "boolean") {
        result = "boolean!";
    } else if (typeof argument === "bigint") {
        result = "bigint!";
    } else if (typeof argument === "function") {
        result = "function!";
    } else if (typeof argument === "object") {
        result = "object!";
    } else if (isNaN(argument)) {
        result = "not a number!";
    } else if (typeof argument === "number") {
        result = "number!";
    } else {
        result = "I have no idea!";
    }

    return result;
    } 

    // Exercise 2

 var a = {
     Berlin: "Germany",
     Paris: "France",
     "New York": "USA",
 };
 var b = {};
 for (var p in a) {
     let country = a[p]
    b[country] = p; 
    // p = a[p]; NOT NECCESARY
 }

    // Exercise 3
    
    for(let i = 10; i > 0; i--){
        console.log(i)
    }