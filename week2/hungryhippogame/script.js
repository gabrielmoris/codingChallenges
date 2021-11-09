(function () {
    console.log("yup you are good to write some logic");//pruebo que funciona
    var board = document.getElementById("clickZone");

    var foodAndVeg = document.getElementsByClassName("food"); //llamo a las imagenes de las frutas y vegetales

    var melon = foodAndVeg[0] //cada una de las comidas
    var salad = foodAndVeg[1]
    var grapes = foodAndVeg[2]
    var carrot = foodAndVeg[3]

    function generateRandomNum(){ //generate random number to change elements position
        return Math.floor(Math.random()*100);
    }

    var melonPos = 30; //this is the starting position checked with offsetLeft (are all same)
    var saladPos = 30;
    var grapesPos = 30;
    var carrotPos = 30;

    board.addEventListener("click", function(){ //añado el eventlistener, como la img es position absolute va a escuchar el click en toda la pantalla
        melonPos += generateRandomNum();
        saladPos += generateRandomNum(); //change the positions with the mathrandom
        grapesPos += generateRandomNum();
        carrotPos += generateRandomNum();

        melon.style.left = melonPos + "px" //les añado más left para que se muevan
        salad.style.left = saladPos + "px"
        grapes.style.left = grapesPos + "px"
        carrot.style.left = carrotPos + "px"

    })


    var melonBtn = document.getElementById("melonBtn")

    melonBtn.addEventListener("click", function(event){ //the same function but only in the button
        melonPos+= generateRandomNum()
        melon.style.left = melonPos + "px"
        event.stopPropagation() //stop other elements to move because his aprent has also an event listener
    })

    function getRandomColorVal(){
        return Math.floor(Math.random()* 256);
    }

    document.addEventListener("keydown", function(event){
        if (event.keyCode === 68){ //escucho si presion la letra d(codigo 68)
            var r = getRandomColorVal() 
            var g = getRandomColorVal();//pone los codigos rgb uno a uno
            var b = getRandomColorVal();
            var randomColor = "rgb("+r+","+g+","+b+")"; //junto los codigos rgb en un string

            document.body.style.backgroundColor= randomColor
        }
    })
})();
