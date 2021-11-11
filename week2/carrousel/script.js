(function () {
    var kitties = document.querySelectorAll("#kitties img");
    var currentKitty = 0;

    function moveKitties() {
        kitties[currentKitty].classList.remove("onscreen");
        kitties[currentKitty].classList.add("exit-left");

        currentKitty++;
        if (currentKitty >= kitties.length) {
            currentKitty = 0;
        }
        kitties[currentKitty].classList.add("onscreen");

        setTimeout(moveKitties, 4000); //recall the function each 4 seconds
    }

    setTimeout(moveKitties, 1000);
    document.addEventListener("transitionend", function (e) {
        if (e.target.className == "exit-left") {
            console.log("it works " + e.target.className);
            e.target.classList.remove("exit-left");
        }
    });
})();
