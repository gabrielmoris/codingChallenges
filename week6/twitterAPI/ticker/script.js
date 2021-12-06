(function () {
    var receiveData;

    $.ajax({
        url: "/data.json",
        method: "GET",
        data: {
            limit: 20,
        },
        success: function (data) {
            receiveData = data;
            var container = $(".headlines").eq(0);

            var left = container.offset().left;
            var myReqId;

            console.log(receiveData);
            /////////////////////////////
            var htmlFormLinks = "";
            var title = [];
            var url = [];
            for (var i = 0; i < receiveData.length; i++) {
                title.push(receiveData[i].text);
                url.push(receiveData[i].url);
            }

            for (var j = 0; j < title.length; j++) {
                htmlFormLinks +=
                    "<a  class = 'the-links' href=" +
                    url[j] +
                    ">" +
                    title[j] +
                    "</a>";
            }

            container.html(htmlFormLinks);
            ////////////////////////////

            var links = container.find("a");

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
        },
    });
})();
