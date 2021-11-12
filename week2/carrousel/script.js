(function () {
    var kitties = document.querySelectorAll("#kitties img");
    var dots = document.querySelectorAll(".dot");
    var currentKitty = 0;
    var isTransitioning = false;
    var timer;

    for (i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function (e) {
            var dotIndex = e.target.id.slice(3);
            if (isTransitioning) {
                return;
            }
            clearTimeout(timer); //to clear the queue
            moveKitties(dotIndex); //to tell which kitty i call when i start
        });
    }

    function moveKitties(dotIdx) {
        dots[currentKitty].classList.remove("on");
        kitties[currentKitty].classList.remove("onscreen");
        kitties[currentKitty].classList.add("exit-left");

        currentKitty++;

        if (dotIdx != undefined) {
            currentKitty = dotIdx;
        }

        if (currentKitty >= kitties.length) {
            currentKitty = 0;
        }
        kitties[currentKitty].classList.add("onscreen");
        dots[currentKitty].classList.add("on");
        isTransitioning = true;

        timer = setTimeout(moveKitties, 8000); //recall the function each 4 seconds
    }

    timer = setTimeout(moveKitties, 1000);
    document.addEventListener("transitionend", function (e) {
        if (e.target.className == "exit-left") {
            // console.log("it works " + e.target.className);
            e.target.classList.remove("exit-left");
            isTransitioning = false;
        }
    });
})();
