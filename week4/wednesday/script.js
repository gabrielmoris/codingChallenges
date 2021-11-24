//Exercise 1
let cucurucho = [5, 4, 3, 2, 1];

function arrayverser(array) {
    let newArr = [...array];
    revArr = newArr.reverse();
    return revArr;
}

console.log(cucurucho, arrayverser(cucurucho));
