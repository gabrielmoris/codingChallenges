(function (countries) {
    var searchField = $("input");
    var resultsContainer = $(".results");
    var doc = $(document);
    var input = $("input");
    var timeoutID;

    searchField.on("input", function () {
        var inputVal = searchField.val().toLowerCase();
        clearTimeout(timeoutID);
        timeoutID = window.setTimeout(input, 200);
        function input() {
            $.ajax({
                url: "https://spicedworld.herokuapp.com/",
                data: {
                    q: inputVal,
                },
                success: function (countries) {
                    if (searchField.val() === inputVal) {
                        console.log(countries);
                        var matchResults = [];
                        for (var i = 0; i < countries.length; i++) {
                            var countriesLowerCase = countries[i].toLowerCase();

                            if (countriesLowerCase.indexOf(inputVal) === 0) {
                                matchResults.push(countries[i]);
                            }
                        }

                        var htmlFormCountries = "";
                        for (var j = 0; j < matchResults.length; j++) {
                            htmlFormCountries +=
                                "<p class='country'>" +
                                matchResults[j] +
                                "</p>";
                        }

                        resultsContainer.html(htmlFormCountries);

                        if (matchResults.length === 0) {
                            htmlFormCountries += "<p>" + "No results" + "</p>";
                        }
                        resultsContainer.html(htmlFormCountries);
                    } else {
                        console.log("results no longer needed");
                    }
                },
            });
        }
    });

    resultsContainer.on("mouseover", "p", function (e) {
        var p = $("p");
        var target = $(e.target);
        p.removeClass("highlighted");
        target.addClass("highlighted");
    });

    resultsContainer.on("click", "p.country", function (e) {
        var highlighted = $(".highlighted");
        input.val(highlighted.text());
    });

    doc.on("keydown", function (e) {
        var p = $("p");
        if (e.keyCode === 40) {
            if ($(".highlighted").length === 0) {
                p.eq(0).addClass("highlighted");
            } else {
                for (var i = 0; i < p.length; i++) {
                    if (p.eq(i).hasClass("highlighted") && i + 1 < p.length) {
                        p.removeClass("highlighted");
                        p.eq(i + 1).addClass("highlighted");
                        break;
                    }
                }
            }
        }

        if (e.keyCode === 38) {
            if ($(".highlighted").length === 0) {
                p.eq(p.length - 1).addClass("highlighted");
            } else {
                for (var i = 0; i < p.length; i++) {
                    if (p.eq(i).hasClass("highlighted") && i - 1 >= 0) {
                        p.removeClass("highlighted");
                        p.eq(i - 1).addClass("highlighted");
                        break;
                    }
                }
            }
        }

        if (e.keyCode === 13) {
            for (var i = 0; i < p.length; i++) {
                if (p.eq(i).hasClass("highlighted")) {
                    if (p.eq(i).text() !== "No results") {
                        input.val(p.eq(i).text());
                    }
                }
            }
        }
    });

    doc.on("click", function (e) {
        e.stopPropagation();
        resultsContainer.addClass("hide");
    });

    input.on("click", function (e) {
        e.stopPropagation();
        resultsContainer.removeClass("hide");
    });
})();
