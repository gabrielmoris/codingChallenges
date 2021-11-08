(function () {
    var container = document.getElementsByClassName("headlines")[0];

    var links = container.getElementsByTagName("A");
    var left = container.offsetLeft;

    function moveHeadlines() {
        left--;

        requestAnimationFrame(moveHeadlines);
        if (left == -links[0].offsetWidth) {
            left += links[0].offsetWidth;
            container.appendChild(links[0]);
        }
        container.style.left = left + "px";
    }

    moveHeadlines();
})();
