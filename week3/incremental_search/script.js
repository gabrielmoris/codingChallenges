(function (countries) {
    var searchField = $("input");
    var resultsContainer = $(".results");
    var doc = $(document); //
    var input = $("input");

    searchField.on("input", function () {
        // understand what the user is typing
        var inputVal = searchField.val().toLowerCase();
        // check against a list of countries for matches
        // we should get a list of countries, that match the user's input, never more than four.
        var matchResults = [];
        for (var i = 0; i < countries.length; i++) {
            var countriesLowerCase = countries[i].toLowerCase();

            if (countriesLowerCase.indexOf(inputVal) === 0) {
                // console.log(countries[i]);
                matchResults.push(countries[i]);
                if (matchResults.length === 4) {
                    // console.log("list is full");
                    break;
                }
            }
        }

        // put up to four countries that match the user input on screen
        var htmlFormCountries = "";
        for (var j = 0; j < matchResults.length; j++) {
            htmlFormCountries +=
                "<p class='country'>" + matchResults[j] + "</p>";
        }
        //inject the html into the container
        // resultsContainer.html(htmlFormCountries);

        if (countriesLowerCase.indexOf(inputVal) < 0) {
            htmlFormCountries += "<p class='country'>" + "No results" + "</p>";
        }
        // resultsContainer.html(htmlFormCountries);
        if (input.val() == "") {
            htmlFormCountries = "";
        }
        resultsContainer.html(htmlFormCountries);
    });

    resultsContainer.on("mouseover", "p", function (e) {
        var p = $("p");
        var target = $(e.target);
        p.removeClass("highlighted");
        target.addClass("highlighted");
    });

    resultsContainer.on("click", "p", function (e) {
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
                    input.val(p.eq(i).text());
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
})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People’s Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
]);
