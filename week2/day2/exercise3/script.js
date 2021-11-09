(function(){

var square = document.getElementById("diver")

console.log(square)
function getRandomColorVal() {
    return Math.floor(Math.random() * 256);
}
function getRandomColorVal2() {
    return Math.floor(Math.random() * 256);
}
square.addEventListener("mousedown", function () {    
        var r = getRandomColorVal();
        var g = getRandomColorVal();
        var b = getRandomColorVal();
        var randomColor = "rgb(" + r + "," + g + "," + b + ")";
        square.style.backgroundColor = randomColor;
        console.log("clicked")
    });

square.addEventListener("mouseup", function () {
    var r = getRandomColorVal2();
    var g = getRandomColorVal2();
    var b = getRandomColorVal2();
    var randomColor = "rgb(" + r + "," + g + "," + b + ")";
    square.style.backgroundColor = randomColor;
    console.log("unclicked")
});

})();