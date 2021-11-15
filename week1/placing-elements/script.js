(function () {
    var moveIn = document.getElementById("menu");
    var moveBack = document.getElementById("close");
    var box = document.getElementById("overlay");
    var boxMenu = document.getElementById("menu2");

    moveIn.addEventListener("click", function () {
        console.log("funciona");
        box.classList.add("on");
        boxMenu.classList.add("on2");
    });

    moveBack.addEventListener("click", function () {
        box.classList.remove("on");
        boxMenu.classList.remove("on2");
    });
})();

setTimeout(function () {
    $("#dialog").css("visibility", "visible");
}, 1000);

$("#close2").on("click", function () {
    $("#dialog").css("visibility", "hidden");
});
