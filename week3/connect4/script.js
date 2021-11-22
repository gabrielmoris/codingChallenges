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
            var shameOnYou = [
                [3, 8, 13, 18],
                [4, 9, 14, 19],
                [9, 14, 19, 24],
                [5, 10, 15, 20],
                [10, 15, 20, 25],
                [15, 20, 25, 30],
                [11, 16, 21, 26],
                [16, 21, 26, 31],
                [21, 26, 31, 36],
                [17, 22, 27, 32],
                [22, 27, 32, 37],
                [23, 28, 33, 38],
                [2, 9, 16, 23],
                [1, 8, 15, 22],
                [8, 15, 22, 29],
                [0, 7, 14, 21],
                [7, 14, 21, 28],
                [12, 21, 28, 35],
                [6, 13, 20, 27],
                [13, 20, 27, 34],
                [20, 27, 34, 41],
                [12, 19, 26, 33],
                [19, 26, 33, 40],
                [18, 25, 32, 40],
                [39, 32, 25, 18],
                [40, 33, 26, 19],
                [33, 26, 19, 12],
                [41, 34, 27, 20],
                [34, 27, 20, 13],
                [27, 20, 13, 6],
                [35, 28, 21, 14],
                [28, 21, 14, 7],
                [21, 14, 7, 0],
                [29, 22, 15, 8],
                [22, 15, 8, 1],
                [23, 16, 9, 2],
            ];
            var everySlot = $(".board .column").children();
            for (j = 0; j < shameOnYou.length; j++) {
                var slot1 = everySlot.eq(shameOnYou[j][0]);
                var slot2 = everySlot.eq(shameOnYou[j][1]);
                var slot3 = everySlot.eq(shameOnYou[j][2]);
                var slot4 = everySlot.eq(shameOnYou[j][3]);
                if (
                    slot1.hasClass("player1") &&
                    slot2.hasClass("player1") &&
                    slot3.hasClass("player1") &&
                    slot4.hasClass("player1")
                ) {
                    return true;
                }
                if (
                    slot1.hasClass("player2") &&
                    slot2.hasClass("player2") &&
                    slot3.hasClass("player2") &&
                    slot4.hasClass("player2")
                ) {
                    return true;
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
