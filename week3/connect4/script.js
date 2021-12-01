(function () {
    var currentPlayer = "player1";
    currentPlayerText = "player 2";
    var currentcoin = "p2"; //
    var coin = $(".followcoin"); //
    var text = $(".text"); //
    ////////////////here i also add the color of the coins and the text in the div
    function switchPlayer() {
        if (currentPlayer === "player1") {
            currentPlayer = "player2";
        } else {
            currentPlayer = "player1";
        }

        if (currentcoin === "p2") {
            currentcoin = "p1";
            currentPlayerText = "player 1";
        } else {
            currentcoin = "p2";
            currentPlayerText = "player 2";
        }
    }
    ////////////////////here i add follow div from week2
    (function () {
        coinLeft = coin.offsetLeft;
        coinTop = coin.offsetTop;

        $(document).on("mousemove", function (event) {
            var mouseLeft = event.clientX;
            var mouseTop = event.clientY;
            function retard() {
                coin.css("left", mouseLeft + "px");
                coin.css("top", mouseTop + "px");
            }

            setTimeout(retard, 200);
        });
    })();
    //////////////////
    $(".column").on("click", function (e) {
        // console.log(e.currentTarget);
        var slotsInCol = $(e.currentTarget).children();
        // console.log(slotsInCol)

        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                // console.log("is empty")
                slotsInCol.eq(i).addClass(currentPlayer);
                coin.removeClass("p1");
                coin.removeClass("p2");
                coin.addClass(currentcoin); //
                break;
            } else {
                // console.log('taken!')
            }
        }
        text.text("Is your turn, " + currentPlayerText + "."); ///
        // console.log("i", i) i can acces i outside of the loop!

        // if (i >= 0){ my option
        //     switchPlayer()
        // }
        if (i === -1) {
            return;
        }

        var rowsIncol = $(".row" + i); //////////To check all the elements in the same row and i pass to checkvictory
        /////////////////// check here again...
        function checkDiagonal() {
            var slots;
            for (var col = 0; col < 7; col++) {
                for (var row = 0; row < 6; row++) {
                    slots = $(
                        ".column:nth-child(" +
                            (col + 1) +
                            ") .slot:nth-child(" +
                            (row + 1) +
                            ")"
                    );
                    for (var i = 1; i <= 3; i++) {
                        slots = slots.add(
                            ".column:nth-child(" +
                                (col + 1 + i) +
                                ") .slot:nth-child(" +
                                (row + 1 + i) +
                                ")"
                        );
                    }
                    if (checkForVictory(slots)) {
                        return true;
                    }
                    slots = slots.eq(0);
                    for (i = 1; i <= 3; i++) {
                        slots = slots.add(
                            ".column:nth-child(" +
                                (col + 1 + i) +
                                ") .slot:nth-child(" +
                                (row + 1 - i) +
                                ")"
                        );
                    }
                    if (checkForVictory(slots)) {
                        return true;
                    }
                }
            }
        }
        ///////////////////////////////////////
        if (
            checkForVictory(slotsInCol) ||
            checkForVictory(rowsIncol) ||
            checkDiagonal()
        ) {
            text.text(currentPlayer + " is the winner!"); //here i can put a nice h1. i have to check how to remove the eventlistener
            $(".hugetext").text(currentPlayer + " is the winner");
            $(".hugediv").css("visibility", "visible");
            $("." + currentPlayer).css("zIndex", "1500");
            $("." + currentPlayer).css("position", "absolute"); ////doesnt work as expected but... why not?
        } else {
            switchPlayer();
        }
    });
    //reuse this function for horizontal winns and pass a jquerry which has an array of cols
    function checkForVictory(slots) {
        var counter = 0;
        // console.log("checking for a victory");
        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(currentPlayer)) {
                counter++;
                if (counter >= 4) {
                    return true;
                }
            } else {
                counter = 0;
            }
        }
    }

    $("button").on("click", function () {
        location.reload();
    });
})();
