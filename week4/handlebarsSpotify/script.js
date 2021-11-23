(function () {
    ////////////////////DO NOT TOUCH ///////////////////////
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function (script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
    ////////////////////DO NOT TOUCH ///////////////////////
    var scrollInfinitely = location.search.indexOf("scroll=infinite") > -1;
    // console.log(scrollInfinitely); checking if is true or false
    var nextUrl;

    function ajaxRequest() {
        $.ajax({
            url: nextUrl,
            method: "GET",

            success: function (data) {
                var response = data.artists || data.albums; //if user search for artis or for album

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
                if (nextUrl === null) {
                    console.log("should hide btn");
                    $("#more-btn").css("visibility", "hidden");
                }
                $(".onion-info").append(Handlebars.templates.onion(response));
            }, //success second ajax
        }); //second AJAX
    }
    function checkScroll() {
        var whereIAm = $(window).height() + $(document).scrollTop();
        // console.log("it calls me");
        if (whereIAm >= $(document).height() - 150) {
            ajaxRequest();
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
                var myHtml = "";
                var response = data.artists || data.albums; //if user search for artis or for album
                console.log(response);
                //check if we have more than 20 results and doesnt show it
                if (response.items.length == 0) {
                    myHtml +=
                        "<div class='artist-results'>NO RESULTS FOUND</div>";
                    $("#more-btn").css("visibility", "hidden");
                    $("#results-container").html(myHtml);
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
                    if (scrollInfinitely) {
                        checkScroll();
                    } else {
                        $("#more-btn").html(
                            "<button class='more'>MORE RESULTS</button>"
                        );
                    }
                } //end of checking if nexturl is not null

                // console.log(myImg);
                $("#title").html(
                    "<h2>Your results for: " + userInput + "</h2>"
                );

                //     //////////////////////THIS MORE BUTTON
                $("#more-btn").on("click", function () {
                    // console.log("onclick2222")
                    ajaxRequest();
                }); //second onclick
                $(".onion-info").html(Handlebars.templates.onion(response)); //equivalente al resultscontainer
            }, //success from ajax
        }); //closes AJAX
    }); //closes onclick submitbtn
})(); //closes iife
