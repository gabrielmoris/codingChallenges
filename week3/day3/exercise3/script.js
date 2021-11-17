(function () {
    var textbox = document.querySelector("textarea");
    console.log(textbox);
    var button = document.querySelector("button");
    textbox.value = localStorage.getItem("added");
    button.addEventListener("click", function () {
        var toLocal = textbox.value;
        try {
            localStorage.setItem("added", toLocal);
        } catch (e) {
            console.log(e.message);
            alert("something went wrong!");
        }
    });
})();
