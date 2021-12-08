const { TestWatcher } = require("@jest/core");
const { increase } = require("./increase");

//test takes two arguments:
//1st a string that describes out testcase
//2nd a callback function that contains our actual unit test

//TESTING NaN
test("Passing NaN produces the string 'ERROR'", () => {
    const result = increase(NaN); //step 1 I call the function with the value I want to test
    expect(result).toBe("ERROR");
});
//TESTING 0
test("Passing 0 produces the string 'ERROR'", () => {
    const result = increase(0); //step 1 I call the function with the value I want to test
    expect(result).toBe("ERROR");
});

//TESTING NEGATIVE NUMBRER
test("Passing negative number produces the string 'ERROR'", () => {
    const result = increase(-9); //step 1 I call the function with the value I want to test
    expect(result).toBe("ERROR");
});

//when i test positive number below a million

test("Passing a num below a million but greater than 0 multiplies that number until it = or > than a million", () => {
    
    expect(increase(2)).toBeGreaterThan(1000000);
});
//when i test positive number bigger than a million
test("Passing a num larger than a million return that number", () => {
    expect(increase(2000000)).toBe(2000000);
});
