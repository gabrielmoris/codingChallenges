(function () {
    var scrollInfinitely = location.search.indexOf("scroll=infinite") > -1;
    // console.log(scrollInfinitely); checking if is true or false
    var nextUrl;
    function checkScroll() {
        var whereIAm = $(window).height() + $(document).scrollTop();
        console.log("it calls me");
        if (whereIAm >= $(document).height() - 150) {
            $.ajax({
                url: nextUrl,
                method: "GET",
                //I dont need this part anymore
                // data: {
                //     query: userInput,
                //     type: albumOrArtist,
                // },
                success: function (data) {
                    var response = data.artists || data.albums; //if user search for artis or for album
                    var myHtml = "";
                    myImg = "";
                    for (var i = 0; i < response.items.length; i++) {
                        // console.log("response.items[i] " + response.items[i]);
                        var imgUrl = "default.jpg";

                        //if there is an img we want to reasign the imgUrls value to that url instead of our default url
                        if (response.items[i].images.length > 0) {
                            imgUrl = response.items[i].images[0].url;
                            // console.log(response.items[i]);
                        }
                        myHtml +=
                            "<div class='artist-results'>" +
                            "<img src=" +
                            "'" +
                            imgUrl +
                            "'" +
                            ">" +
                            "<a href=" +
                            response.items[i].external_urls.spotify +
                            " target='_blank'>" +
                            response.items[i].name +
                            "</a>";
                        +"</div>";
                    }
                    nextUrl =
                        response.next &&
                        response.next.replace(
                            "https://api.spotify.com/v1/search",
                            "https://spicedify.herokuapp.com/spotify"
                        );
                    //if nextUrl is not null we want to show the more button, if not we hide it
                    // console.log(nextUrl)
                    if (nextUrl != null) {
                        checkScroll();
                    }

                    $("#results-container").append(myHtml);
                }, //success second ajax
            }); //second AJAX
        } else {
            setTimeout(checkScroll, 750);
        }
    } //end function checkscroll

    $("#submit-btn").on("click", function () {
        var userInput = $("input[name=user-input]").val(); // get whatever the user tiped
        var albumOrArtist = $("select").val(); //get whatever the user selected
        // alert("I wrote " + userInput + " and I selected " + albumOrArtist);
        //here i know what information i want, then i talk to the spotify API (our proxy first);
        $.ajax({
            url: "https://spicedify.herokuapp.com/spotify",
            method: "GET",
            data: {
                query: userInput,
                type: albumOrArtist,
            },
            success: function (data) {
                // console.log(data)
                var response = data.artists || data.albums; //if user search for artis or for album
                var myHtml = "";
                myImg = "";
                //things we are interested in are inside of the objets, in the items
                // console.log(response)
                if (response.items.length == 0) {
                    myHtml +=
                        "<div class='artist-results'>NO RESULTS FOUND</div>";
                    $("#more-btn").css("visibility", "hidden");
                } else {
                    for (var i = 0; i < response.items.length; i++) {
                        // console.log("response.items[i] " + response.items[i]);
                        var imgUrl = "default.jpg";

                        //if there is an img we want to reasign the imgUrls value to that url instead of our default url
                        if (response.items[i].images.length > 0) {
                            imgUrl = response.items[i].images[0].url;
                            // console.log(response.items[i]);
                        }

                        myHtml +=
                            "<div class='artist-results'>" +
                            "<img src=" +
                            "'" +
                            imgUrl +
                            "'" +
                            ">" +
                            "<a href=" +
                            response.items[i].external_urls.spotify +
                            " target='_blank'>" +
                            response.items[i].name +
                            "</a>";
                        +"</div>";
                    }
                    //check if we have more than 20 results and doesnt show it
                    nextUrl =
                        response.next &&
                        response.next.replace(
                            "https://api.spotify.com/v1/search",
                            "https://spicedify.herokuapp.com/spotify"
                        );
                    //if nextUrl is not null we want to show the more button, if not we hide it
                    // console.log(nextUrl)
                    if (nextUrl != null) {
                        if (scrollInfinitely) {
                            checkScroll();
                        } else {
                            $("#more-btn").html(
                                "<button class='more'>MORE RESULTS</button>"
                            );
                        }
                    } //end of checking if nexturl is not null
                }
                // console.log(myImg);
                $("#title").html(
                    "<h2>Your results for: " + userInput + "</h2>"
                );
                //put the html generated on the screen
                $("#results-container").html(myHtml);

                $("#more-btn").on("click", function () {
                    // console.log("onclick2222")
                    $.ajax({
                        url: nextUrl,
                        method: "GET",
                        //I dont need this part anymore it is already part of the url
                        // data: {
                        //     query: userInput,
                        //     type: albumOrArtist,
                        // },
                        success: function (data) {
                            var response = data.artists || data.albums; //if user search for artis or for album
                            var myHtml = "";
                            myImg = "";
                            for (var i = 0; i < response.items.length; i++) {
                                // console.log("response.items[i] " + response.items[i]);
                                var imgUrl = "default.jpg";

                                //if there is an img we want to reasign the imgUrls value to that url instead of our default url
                                if (response.items[i].images.length > 0) {
                                    imgUrl = response.items[i].images[0].url;
                                    // console.log(response.items[i]);
                                }
                                myHtml +=
                                    "<div class='artist-results'>" +
                                    "<img src=" +
                                    "'" +
                                    imgUrl +
                                    "'" +
                                    ">" +
                                    "<a href=" +
                                    response.items[i].external_urls.spotify +
                                    " target='_blank'>" +
                                    response.items[i].name +
                                    "</a>";
                                +"</div>";
                            }
                            nextUrl =
                                response.next &&
                                response.next.replace(
                                    "https://api.spotify.com/v1/search",
                                    "https://spicedify.herokuapp.com/spotify"
                                );
                            //if nextUrl is not null we want to show the more button, if not we hide it
                            // console.log(nextUrl)
                            if (nextUrl != null) {
                                $("#more-btn").html(
                                    "<button class='more'>MORE RESULTS</button>"
                                );
                            }
                            if (nextUrl === null) {
                                console.log("should hide btn");
                                $("#more-btn").css("visibility", "hidden");
                            }
                            $("#results-container").append(myHtml);
                        }, //success ajax
                    }); //second AJAX
                }); //second onclick
            }, //success from ajax
        }); //closes AJAX
    }); //closes onclick submitbtn
})(); //closes iife
