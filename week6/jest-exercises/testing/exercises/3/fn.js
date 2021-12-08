module.exports = function fn(value) {
    if (typeof value === "string") {
       
        return reverseString(value);
    }
    if (typeof value === "number") {
        return null;
    }
    if (Array.isArray(value)) {
        let newArray = [];
        for (i = 0; i < value.length; i++) {
           newArray.push(fn(value[i]))
        }
        return newArray
    }
};
function reverseString(string) {
     let newString = "";
     for (var i = string.length - 1; i >= 0; i--) {
         newString += string[i];
     }
     return newString;
 }