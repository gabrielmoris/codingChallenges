(function () {
    var textbox = document.querySelector("textarea");
    console.log(textbox);
    var button = document.querySelector("button");

    button.addEventListener("click", function () {
        try {
            JSON.parse(textbox.value);
            alert("JSON file!")
        } catch (e) {
            console.log(e.message);
            alert("Not a JSON file.");
        }
    });
})();
