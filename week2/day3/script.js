(function () {
    var can = document.getElementById("canv");
    var ctx = can.getContext("2d");

    ctx.fillStyle = "tomato";
    ctx.strokeStyle = "tomato";
    ctx.lineWidth = 3;
    ctx.arc(50, 40, 20, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(50, 40);
    ctx.lineTo(50, 120);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(50, 120);
    ctx.lineTo(25, 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(50, 120);
    ctx.lineTo(75, 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(50, 70);
    ctx.lineTo(25, 90);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(50, 70);
    ctx.lineTo(75, 90);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(45, 36, 2, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(55, 36, 2, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(50, 42.5, 10, 0, Math.PI);
    ctx.fill();
})();

(function () {
    var can = document.getElementById("canv2");
    var ctx = can.getContext("2d");
    ctx.drawImage(document.getElementById("canv"), 1, 1, 70, 140);
    var x = 1;
    var y =1;
    document.onkeydown = function (e) {
        // another way to do -->document.addEventListener("keydown", function(e){});
        console.log(e.keyCode);
        if(e.keyCode == 37){
            ctx.clearRect(0, 0, can.width, can.height);
            x-=4;
            ctx.drawImage(document.getElementById("canv"), x, y, 70, 140);
        }
        if (e.keyCode == 38) {
            ctx.clearRect(0, 0, can.width, can.height);
            y-=4;
            ctx.drawImage(document.getElementById("canv"), x, y, 70, 140);
        }
        if (e.keyCode == 39) {
            ctx.clearRect(0, 0, can.width, can.height);
            x+=4;
            ctx.drawImage(document.getElementById("canv"), x, y, 70, 140);
        }
        if (e.keyCode == 40) {
            ctx.clearRect(0, 0, can.width, can.height);
            y+=4;
            ctx.drawImage(document.getElementById("canv"), x, y, 70, 140);
        }

    };

})();
