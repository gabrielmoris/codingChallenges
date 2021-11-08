//EXERCISE 1

function styler(selector) {
    var selected = document.querySelectorAll(selector);
    // console.log(selected)
    // var bold = document.createElement("strong");
    // var italic = document.createElement("em");
    // var underLine = document.createElement("u");
    // var boldItalic = bold.appendChild(italic);
    // var boItUn = underLine.appendChild(boldItalic);
    //This is other way that would ne interesting to research
    for (i = 0; i < selected.length; i++) {
        selected[i].style.fontStyle = "italic";
        selected[i].style.textDecoration = "underline";
        selected[i].style.fontWeight = "bolder";
    }
}
styler("h1");
//EXERCISE 2

function selecter(classhere) {
    var arr = [];
    var nodeList = document.getElementsByClassName(classhere);
    //with querySelectorAll it doesn´t work and i dont know why.
    for (var i = 0; i < nodeList.length; i++) {
        arr.push(nodeList[i]);
    }
    return arr;
}

//EXERCISE 3

function inserter() {
    var elementInserted = document.createElement("h1");
    var textImput = document.createTextNode("AWESOMEEEEEE");
    elementInserted.appendChild(textImput);
    document.querySelector("body").appendChild(elementInserted);
    elementInserted.style.zIndex = "2147483647";
    elementInserted.style.left = "20px";
    elementInserted.style.top = "100px";
    elementInserted.style.fontSize = "200px";
    elementInserted.style.position = "fixed";
}
