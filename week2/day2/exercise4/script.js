(function () {
    var parent = document.getElementById("parent");
    var child = document.getElementById("child");

    console.log("parent "+parent);
    console.log("child "+child);
    function getRandomColorVal() {
        return Math.floor(Math.random() * 256);
    }

    parent.addEventListener("click", function () {
        var r = getRandomColorVal();
        var g = getRandomColorVal();
        var b = getRandomColorVal();
        var randomColor = "rgb(" + r + "," + g + "," + b + ")";
        parent.style.backgroundColor = randomColor;
        console.log("parent clicked");
    });

    child.addEventListener("click", function (event) {
        var r = getRandomColorVal();
        var g = getRandomColorVal();
        var b = getRandomColorVal();
        var randomColor = "rgb(" + r + "," + g + "," + b + ")";
        child.style.backgroundColor = randomColor;
        event.stopPropagation()
        console.log("child clicked");
    });
})();
