//Exercise 1
let cucurucho = [5, 4, 3, 2, 1];

function arrayverser(array) {
    let newArr = [...array];
    revArr = newArr.reverse();
    return revArr;
}

console.log(
    "original array: " +
        cucurucho +
        " reversed array: " +
        arrayverser(cucurucho)
);

//Exercise 2

let array1 = [1, 2, 3];
let array2 = [4, 5];

function glueArray(arr1, arr2) {
    let array3 = [...arr1, ...arr2];
    return array3;
}

console.log(
    "array 1: " +
        array1 +
        " array 2: " +
        array2 +
        " arrayglued: " +
        glueArray(array1, array2)
);

//Exercise 3
//ORIGINAL
function logInfo(city) {
    const name = city.name;
    const country = city.country;
    const numPeople = city.population;

    console.log(
        `${name} is in ${country} and has ${numPeople} inhabitants in it.`
    );
}

//ES6
function logInfo(...etc) {
    const name,
    const country,
    const population,
    ()=>{
    console.log(
        `${name} is in ${country} and has ${numPeople} inhabitants in it.`
    )}
};

 logInfo({ name: "Marseille", country: "France", population: 861635 });
//EXERCISE 4
//ORIGINAL FUNCTION
let getNameAndCountry = ({ name, country }) => [name, country];

let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
    let [, country] = getNameAndCountry(city2);
    return {
        ...city1,
        country,
    };
};

//OLD VERSION JS FUNCTION

var GetNameAndCountry = function (name, country) {
    (name = this.name), (country = this.country);
};

let GetRelocatedCity = function (city1, city2) {
    if ((city2.country = "undefined")) {
        city2 = {
            country: "Germany",
        };
    } else {
        this.country = city2.country;
    }

    return city1, city2.country;
};
