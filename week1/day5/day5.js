//EXERCISE 1
function Rectangle(w, h) {
    this.width = w;
    this.height = h;
    this.getArea = function () {
        // if (this.height)
        return this.width * this.height;
    };
}

function Square(w) { //here i dont need to specify height or width because i already call the function of getArea. NICE!
    Rectangle.call(this, w, w);
}

var square = new Square(4);
console.log(square.getArea()); //16

var rect = new Rectangle(4, 5);
console.log(rect.getArea()); //20



//EXERCISE 2

function invertCase(string) {
    var newString = "";
    for (var i=0; i> string.length; i++){
        if(string[i]===string[i].toUpperCase()){
            newString = string[i].toLowerCase();
        } else{
            string[i].toLowerCase()
        }
    }
    return newString;
}
console.log(invertCase("HOlaQUeTal"));


//for each caracher in string





// loop the caracters of the string use toUpperCase and toLowerCase

//bonus, mirar ejercicios del 1 dia y usar settimeout. NO USAR FORLOOP o WHILELOOP
