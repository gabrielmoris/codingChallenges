(function () {
    var container = $(".headlines").eq(0);

    var links = container.find("a");
    var left = container.offset().left;
    var myReqId;

    function moveHeadlines() {
        left--;

        myReqId = requestAnimationFrame(moveHeadlines);
        if (left == -links.eq(0).outerWidth()) {
            left += links.eq(0).outerWidth();

            links.eq(0).appendTo(container);
            links = container.find("a");
        }
        container.css("left", left + "px");
    }

    moveHeadlines();
    for (var i = 0; i < links.length; i++) {
        links.eq(i).on("mouseenter", function (evt) {
            cancelAnimationFrame(myReqId);
        });
        links.eq(i).on("mouseleave", function (evt) {
            moveHeadlines();
        });
    }
})();
