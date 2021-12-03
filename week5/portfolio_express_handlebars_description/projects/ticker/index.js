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


(function () {
    var container = document.getElementsByClassName("footerline")[0];

    var links = container.getElementsByTagName("A");

    var left = container.offsetLeft + container.offsetWidth;

    var myReqId;

    function moveHeadlines() {
        left--;

        myReqId = requestAnimationFrame(moveHeadlines);
        var restart = links[links.length - 1].offsetWidth;
        console.log(left);
        console.log("restart; " + restart);

        
        if (left <= -restart) {
            console.log("SHOULD CHANGE THE ORDER");
            left += links[links.length - 1].offsetWidth;
            container.insertBefore(links[links.length - 1], links[0]);
        }
        container.style.right = left + "px"; 
    }

    moveHeadlines();

    
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseenter", function (evt) {
            console.log(evt.target + "   is the element");
            cancelAnimationFrame(myReqId);
        });
        links[i].addEventListener("mouseleave", function (evt) {
            console.log(evt.target + "   was the element");
            moveHeadlines();
        });
    }
})();
