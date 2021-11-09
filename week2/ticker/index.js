(function () {
    var container = document.getElementsByClassName("headlines")[0];

    var links = container.getElementsByTagName("A");
    var left = container.offsetLeft;
    var myReqId;
    function moveHeadlines() {
        left--;

       myReqId= requestAnimationFrame(moveHeadlines);
        if (left == -links[0].offsetWidth) {
            left += links[0].offsetWidth;
            container.appendChild(links[0]);
        }
        container.style.left = left + "px";
    }

    moveHeadlines();
     for (var i = 0; i < links.length; i++){
        links[i].addEventListener("mouseenter", function (evt) {
            console.log(evt.target+"   is the element")    
            cancelAnimationFrame(myReqId);
        });
        links[i].addEventListener("mouseleave", function (evt) {
            console.log(evt.target + "   was the element");
            moveHeadlines()
        });
    }
})();
