(function () {
    var slide = $("#slide");
    var box = $("#box");
    var pan = $("#pan1");
    var doc = $(document);
    var slideposition = slide.offset().left;


    slide.on("mousedown", function (e) {
        doc.on("mousemove", function (e) {
            if (e.clientX > 103 && e.clientX < box.outerWidth() + 87) {
                var xpos = e.clientX - slideposition;
                // console.log(e.clientX);
                slide.css("left", xpos);
                pan.css("width", xpos);
            }
        });
        e.preventDefault();
    });

    slide.on("mouseup", function () {
        doc.off("mousemove");
    });
})();