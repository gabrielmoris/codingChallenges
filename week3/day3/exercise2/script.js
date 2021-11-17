function askForNumber() {
    var num = prompt("Please enter a number between 1 and 10");
    if (num >= 1 && num <= 10 && num == parseInt(num)) {
        return num;
    }
    throw new Error("Bad number");
}

var fn = function translateNumberToGerman() {
    var solution = "";
    try {
        var number = askForNumber();
        if (number == 1) {
            solution = "Eins.";
        } else if (number == 2) {
            solution = "Zwei.";
        } else if (number == 3) {
            solution = "Drei.";
        } else if (number == 4) {
            solution = "Vier";
        } else if (number == 5) {
            solution = "Funf.";
        } else if (number == 6) {
            solution = "Sechs.";
        } else if (number == 7) {
            solution = "Sieben.";
        } else if (number == 8) {
            solution = "Acht.";
        } else if (number == 9) {
            solution = "Neun.";
        } else if (number == 10) {
            solution = "Zehn.";
        }
        alert(solution);
    } catch (err) {
        
        console.log(err);
        fn();
    } 
    fn();
}
fn();
