(function () {
var square = document.getElementById("follow")
squareLeft = square.offsetLeft
squareTop =square.offsetTop

document.addEventListener("mousemove", function(event) {
    var mouseLeft = event.clientX;
    var mouseTop = event.clientY;
    console.log(mouseLeft)
    square.style.left = (mouseLeft -50) + "px"
    square.style.top = (mouseTop -50) + "px"
});

})()