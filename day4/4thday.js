//EXERCISE 1
function each(obArr, func){
    if(Array.isArray(obArr)){
        obArr.forEach(func);
    } else if(typeof obArr === "object"){
        for (var p in obArr) {
        func(obArr[p], p)
        }
    } else {
        return "ERROR"
    }
}




console.log(each({
       a: 1,
       b: 2
   }, function(val, name) {
       console.log('The value of ' + name + ' is ' + val);
   })); // logs 'the value of a is 1' and 'the value of b is 2'

 console.log(each(['a', 'b'], function(val, idx) {
       console.log('The value of item ' + idx + ' is ' + val);
   })); // logs 'the value of item 0 is a' and 'the value of item 1 is b'

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
var result = array.filter(function (item) {
    return item < 0;
});

    return result
}


   console.log(getLessThanZero([1, 2, -1, -90, 10])); //[-1, -90]
   console.log(getLessThanZero([1, 2])); //[]
