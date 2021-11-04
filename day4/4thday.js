//EXERCISE 1







//EXERCISE 2

function reverser(array) {
    var newArray = [];
    array.forEach((element) => newArray.unshift(element));
    return newArray;
}
var erre = [1, 2, 3, 4];
console.log(reverser(erre));
console.log(erre);

//EXERCISE 3

function getLessThanZero (array){
    const result = array.filter((item) => item < 0);
    return result
}


   getLessThanZero([1, 2, -1, -90, 10]); //[-1, -90]
   getLessThanZero([1, 2]); //[]
