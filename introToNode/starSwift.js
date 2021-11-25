//starSwift.js
console.log("HEllo fromStarSwift");

function sayHello(){
    console.log("starSwift saying hello :D")
}

module.exports.sayHello = sayHello

module.exports.starSwiftify = function (str) {
    return "🌟" + str + "🪐";
};

exports.anotherWayToExport = "this works just fine";


